export const generateReport = (answers) => {
  const report = {
    topTips: [
      "Implement SPF and DKIM authentication for improved deliverability",
      "Use an email verification tool to clean your list",
      "Personalize your email content for higher engagement",
      "Implement a consistent email warming strategy",
      "Monitor and improve your sender reputation"
    ],
    personalization: {
      name: answers[6] || "there",
      website: answers[5] || "your website",
    },
    analysis: `Based on your responses, it appears that your current email deliverability rate is ${answers[1]}. You're sending about ${answers[3]} cold emails per week with an average open rate of ${answers[4]}. To improve your results, focus on implementing the top tips provided above.`
  };

  return report;
};