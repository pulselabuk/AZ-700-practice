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
    explanation: "Azure Web Application Firewall (WAF) provides centralized protection of web applications from common exploits and vulnerabilities, such as SQL injection and cross-site scripting.",
    category: "Application Protection"
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
    explanation: "The correct order ensures proper setup of an ExpressRoute circuit with provider validation before linking to your virtual network.",
    category: "ExpressRoute"
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
    explanation: "Standard SKU load balancer is recommended as it provides zone redundancy, supports availability zones, and includes enhanced security features required by Contoso.",
    category: "Load Balancing"
  },
  {
    id: 4,
    type: QuestionType.MultipleChoice,
    question: "You need to configure a Site-to-Site VPN between your on-premises network and Azure. Which VPN type should you choose to support dynamic routing protocols?",
    options: [
      "Policy-based VPN",
      "Route-based VPN",
      "Point-to-Site VPN",
      "ExpressRoute"
    ],
    correctAnswer: 1,
    explanation: "Route-based VPNs support dynamic routing protocols and are suitable for configurations requiring flexible routing.",
    category: "VPN Solutions"
  },
  {
    id: 5,
    type: QuestionType.OrderSteps,
    question: "Arrange the steps in the correct order to configure an Azure Virtual Network Gateway for a site-to-site VPN connection:",
    options: [
      "Add a gateway subnet",
      "Create a Public IP address for the gateway", 
      "Create the Virtual Network Gateway",
      "Create a Virtual Network",
      "Create the VPN connection",
      "Configure the local network gateway"
    ],
    correctOrder: [3, 0, 1, 2, 5, 4], // Correct order to follow
    explanation: "To configure an Azure Virtual Network Gateway for a site-to-site VPN connection, first create the Virtual Network, then add a gateway subnet. After that, create a Public IP address for the gateway, followed by creating the Virtual Network Gateway. Next, configure the local network gateway (on-premises device) and finally create the VPN connection between the two gateways.",
    category: "VPN Solutions"
  },
  {
    id: 6,
    type: QuestionType.MultipleChoice,
    question: "Which Azure service allows you to extend your on-premises networks into the Microsoft cloud over a private connection facilitated by a connectivity provider?",
    options: [
      "Azure VPN Gateway",
      "Azure ExpressRoute",
      "Azure Virtual WAN",
      "Azure Bastion"
    ],
    correctAnswer: 1,
    explanation: "Azure ExpressRoute enables private connections between your on-premises networks and Azure, facilitating higher security and reliability.",
    category: "ExpressRoute"
  },
  {
    id: 7,
    type: QuestionType.OrderSteps,
    question: "Sequence the steps to configure a Point-to-Site VPN connection using Azure VPN Gateway:",
    options: [
      "Create the VPN gateway",
      "Create a virtual network and gateway subnet",
      "Generate client configuration files",
      "Install client configuration on devices",
      "Configure the VPN client address pool"
    ],
    correctOrder: [1, 0, 4, 2, 3], // Updated order
    explanation: "Configuring a Point-to-Site VPN involves setting up a virtual network and gateway subnet, creating the VPN gateway, configuring the client address pool, generating client configuration files, and installing them on client devices.",
    category: "VPN Solutions"
  },
  {
    id: 8,
    type: QuestionType.MultipleChoice,
    question: "To monitor and analyze network traffic to and from Azure resources, which service should you implement?",
    options: [
      "Azure Monitor",
      "Azure Traffic Manager",
      "Azure Network Watcher",
      "Azure Security Center"
    ],
    correctAnswer: 2,
    explanation: "Azure Network Watcher provides tools to monitor, diagnose, and view metrics for Azure networking resources, aiding in traffic analysis.",
    category: "Network Monitoring"
  },
  {
    id: 9,
    type: QuestionType.OrderSteps,
    question: "Order the steps to configure Azure Application Gateway with a Web Application Firewall (WAF):",
    options: [
      "Define routing rules",
      "Set up backend pools",
      "Create an application gateway",
      "Enable WAF and set security policies",
      "Configure the frontend IP"
    ],
    correctOrder: [2, 4, 1, 0, 3], // Updated order
    explanation: "Configuring Azure Application Gateway with WAF involves creating the gateway, configuring the frontend IP, setting up backend pools, defining routing rules, and enabling WAF with appropriate security policies.",
    category: "Application Protection"
  },
  {
    id: 10,
    type: QuestionType.MultipleChoice,
    question: "Which Azure service provides DNS domain registration and management, allowing you to host your domains alongside your Azure services?",
    options: [
      "Azure Traffic Manager",
      "Azure DNS",
      "Azure Front Door",
      "Azure Content Delivery Network (CDN)"
    ],
    correctAnswer: 1,
    explanation: "Azure DNS allows you to host your DNS domains in Azure, providing name resolution using Microsoft’s infrastructure.",
    category: "Routing"
  }
  // Additional questions can be added here following the same structure
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