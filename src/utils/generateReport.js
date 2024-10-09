export const generateReport = (answers, name, company) => {
  let report = {
    name,
    company,
    score: 0,
    recommendations: []
  };

  // Analyze answers and generate recommendations
  if (answers[3] && answers[3][0].startsWith('<')) {
    report.recommendations.push("Your open rates are below average. Consider improving your subject lines and sender reputation.");
  }

  if (answers[4] && answers[4][0].startsWith('<')) {
    report.recommendations.push("Your response rates are low. Focus on improving your email copy and call-to-action.");
  }

  if (!answers[6] || !answers[6].includes('DMARC')) {
    report.recommendations.push("Implement DMARC authentication to improve email deliverability and protect your domain from spoofing.");
  }

  if (answers[9] && answers[9][0] === "Low Deliverability") {
    report.recommendations.push("Prioritize improving your email deliverability. This may involve cleaning your email list, warming up your domain, and improving your email content.");
  }

  // Add more analysis and recommendations based on the answers

  return report;
};