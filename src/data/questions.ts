import { Question, QuestionType } from '../types';

export const questions: Question[] = [
  {
    id: 1,
    type: QuestionType.MultipleChoice,
    question: "Which Azure service should you use to protect web applications from common web vulnerabilities and exploits?",
    options: [
      "Azure DDoS Protection",
      "Azure Web Application Firewall (WAF)",
      "Network Security Groups (NSG)",
      "Azure Firewall"
    ],
    correctAnswer: 1,
    explanation: "Azure Web Application Firewall (WAF) provides centralized protection of web applications from common exploits and vulnerabilities, such as SQL injection and cross-site scripting."
  },
  {
    id: 2,
    type: QuestionType.OrderSteps,
    question: "Order the steps to implement Azure ExpressRoute circuit provisioning:",
    options: [
      "Create an ExpressRoute circuit",
      "Get the service key",
      "Link the circuit to a virtual network",
      "Verify the provider's completion of circuit provisioning",
      "Send the service key to the connectivity provider"
    ],
    correctOrder: [0, 1, 4, 3, 2],
    explanation: "The correct order ensures proper setup of an ExpressRoute circuit with provider validation before linking to your virtual network."
  },
  {
    id: 3,
    type: QuestionType.CaseStudy,
    scenario: `Contoso Ltd. is migrating their on-premises infrastructure to Azure. They have:
- 3 data centers in different regions
- Requirements for 99.99% availability
- Need for private connectivity
- Multiple web applications requiring load balancing
- Strict security requirements for all incoming traffic`,
    question: "Which load balancer SKU should Contoso use for their web applications?",
    options: [
      "Basic SKU",
      "Standard SKU",
      "Gateway SKU",
      "Premium SKU"
    ],
    correctAnswer: 1,
    explanation: "Standard SKU load balancer is recommended as it provides zone redundancy, supports availability zones, and includes enhanced security features required by Contoso."
  }
  // Note: This is just a sample, the actual implementation would include hundreds of questions
];

export const categories = [
  "Virtual Networks",
  "Load Balancing",
  "Application Protection",
  "ExpressRoute",
  "VPN Solutions",
  "Private Link",
  "Network Security",
  "Routing",
  "Network Monitoring"
];