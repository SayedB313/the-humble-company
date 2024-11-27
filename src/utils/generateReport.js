export const generateReport = (answers, name, company) => {
  let report = {
    name,
    company,
    score: 0,
    recommendations: []
  };

  // Analyze answers and generate recommendations
  if (answers[3] && answers[3][0].startsWith('<')) {
    report.recommendations.push("Your market penetration is below average. Consider improving your strategic approach and market positioning.");
  }

  if (answers[4] && answers[4][0].startsWith('<')) {
    report.recommendations.push("Your engagement rates are low. Focus on improving your value proposition and client communication strategy.");
  }

  if (!answers[6] || !answers[6].includes('Strategy')) {
    report.recommendations.push("Consider implementing a comprehensive business strategy to improve overall market performance and competitive positioning.");
  }

  if (answers[9] && answers[9][0] === "Low Performance") {
    report.recommendations.push("Prioritize improving your business metrics. This may involve optimizing operations, enhancing customer experience, and refining your market approach.");
  }

  return report;
};