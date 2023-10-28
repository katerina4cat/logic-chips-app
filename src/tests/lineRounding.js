function pointsToSvgPath(points, rad) {
    if (points.length < 2) {
        return "";
    }

    let path = `M${points[0].x},${points[0].y}`;

    for (let i = 1; i < points.length - 1; i++) {
        const previousPoint = points[i - 1];
        const currentPoint = points[i];
        const nextPoint = points[i + 1];

        const lcpx = currentPoint.x - previousPoint.x;
        const lcpy = currentPoint.y - previousPoint.y;
        const dCoefcp = rad / Math.sqrt(lcpx * lcpx + lcpy * lcpy);
        const qx = currentPoint.x - lcpx * dCoefcp;
        const qy = currentPoint.y - lcpy * dCoefcp;

        const lpnx = nextPoint.x - currentPoint.x;
        const lpny = nextPoint.y - currentPoint.y;
        const dCoefpn = rad / Math.sqrt(lpnx * lpnx + lpny * lpny);
        const ex = currentPoint.x + lpnx * dCoefpn;
        const ey = currentPoint.y + lpny * dCoefpn;
        if (qx == -6300) console.log(dCoefcp);
        path += ` L${qx},${qy}Q${currentPoint.x},${currentPoint.y},${ex},${ey}`;
    }
    path += `L${points[points.length - 1].x},${points[points.length - 1].y}`;

    return path;
}

const points = [
    { x: 0, y: 100 },
    { x: 50, y: 20 },
    { x: 100, y: 100 },
];
const rad = 25;

const svgPath = pointsToSvgPath(points, rad);
console.log(svgPath);
