/**
 * Subtle Animated Circuit Background Canvas
 * High performance, battery-friendly, respects prefers-reduced-motion
 */
(function initCircuitBackground() {
  const canvas = document.getElementById('circuit-canvas');
  if (!canvas) return;

  // Check if reduced motion is requested
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    canvas.style.display = 'none';
    return;
  }

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    initNodes();
  });

  const nodeCount = Math.min(32, Math.floor((width * height) / 45000));
  const nodes = [];

  function initNodes() {
    nodes.length = 0;
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 1.5 + 1.2,
        pulseOffset: Math.random() * Math.PI * 2
      });
    }
  }

  initNodes();

  let lastTime = 0;
  function animate(timestamp) {
    if (!lastTime) lastTime = timestamp;
    const delta = (timestamp - lastTime) / 1000;
    lastTime = timestamp;

    ctx.clearRect(0, 0, width, height);

    // Update & draw nodes
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      node.x += node.vx;
      node.y += node.vy;

      if (node.x < 0) node.x = width;
      if (node.x > width) node.x = 0;
      if (node.y < 0) node.y = height;
      if (node.y > height) node.y = 0;

      // Draw subtle node
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(56, 189, 248, 0.45)';
      ctx.fill();

      // Connect orthogonal/grid-style circuit traces
      for (let j = i + 1; j < nodes.length; j++) {
        const other = nodes[j];
        const dx = other.x - node.x;
        const dy = other.y - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 140) {
          const alpha = (1 - dist / 140) * 0.12;
          ctx.beginPath();
          // Circuit-style 90-degree trace
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(other.x, node.y);
          ctx.lineTo(other.x, other.y);
          ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();

          // Occasional circuit junction pad
          if (dist < 70 && i % 4 === 0) {
            ctx.fillStyle = `rgba(34, 211, 238, ${alpha * 1.5})`;
            ctx.fillRect(other.x - 1.5, node.y - 1.5, 3, 3);
          }
        }
      }
    }

    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
})();
