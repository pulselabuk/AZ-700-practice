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
  },
  {
    id: 11,
    type: QuestionType.MultipleChoice,
    question: "Your company has a single on-premises datacenter in Washington DC. The East US Azure region has a peering location in Washington DC. The company only has Azure resources in the East US region. You need to implement ExpressRoute to support up to 1 Gbps. You must use only ExpressRoute Unlimited data plans. The solution must minimize costs. Which type of ExpressRoute circuits should you create?",
    options: [
      "ExpressRoute Local",
      "ExpressRoute Direct",
      "ExpressRoute Premium",
      "ExpressRoute Standard"
    ],
    correctAnswer: 0, // A. ExpressRoute Local
    explanation: "ExpressRoute Local is the most cost-effective option when you have Azure resources in the same region as the peering location and need to minimize costs.",
    category: "ExpressRoute"
  },
  {
    id: 12,
    type: QuestionType.MultipleChoice,
    question: "You are planning an Azure Point-to-Site (P2S) VPN that will use OpenVPN. Users will authenticate by an on-premises Active Directory domain. Which additional service should you deploy to support the VPN authentication?",
    options: [
      "An Azure Key Vault",
      "A RADIUS server",
      "A certification authority",
      "Azure Active Directory (Azure AD) Application Proxy"
    ],
    correctAnswer: 1, // B. RADIUS Server
    explanation: "To authenticate users via Active Directory, a RADIUS server is needed to facilitate the authentication for the OpenVPN connection.",
    category: "VPN Solutions"
  },
  {
    id: 13,
    type: QuestionType.MultipleChoice,
    question: "You plan to configure BGP for a Site-to-Site VPN connection between a datacenter and Azure. Which Azure resource should you configure? Only one of the two required components are listed.",
    options: [
      "Azure Application Gateway",
      "Azure Firewall",
      "A local network gateway",
      "Azure Front Door"
    ],
    correctAnswer: [2], // C. local network gateway
    explanation: "You need to configure both a Virtual Network Gateway in Azure and a Local Network Gateway for the on-premises datacenter when implementing BGP for Site-to-Site VPN.",
    category: "VPN Solutions"
  },
  {
    id: 14,
    type: QuestionType.MultipleChoice,
    question: "You fail to establish a Site-to-Site VPN connection between your company's main office and an Azure virtual network. You need to troubleshoot what prevents you from establishing the IPsec tunnel. Which diagnostic log should you review?",
    options: [
      "IKEDiagnosticLog",
      "RouteDiagnosticLog",
      "GatewayDiagnosticLog",
      "TunnelDiagnosticLog"
    ],
    correctAnswer: 0, // A. IKEDiagnosticLog
    explanation: "The IKEDiagnosticLog provides insight into the IKE (Internet Key Exchange) phase of the VPN connection, which is crucial for troubleshooting IPsec tunnel issues.",
    category: "VPN Solutions"
  },
  {
    id: 15,
    type: QuestionType.MultipleChoice,
    question: "You have an Azure virtual network and an on-premises datacenter. You are planning a Site-to-Site VPN connection between the datacenter and the virtual network. Which resource should you include in your plan?.",
    options: [
      "A user-defined route",
      "A virtual network gateway",
      "Azure Firewall",
      "Azure Web Application Firewall (WAF)",
      "An on-premises data gateway",
      "An Azure application gateway",
    ],
    correctAnswer: 1, // B. virtual network gateway
    explanation: "The key resources required for a Site-to-Site VPN connection are the Virtual Network Gateway in Azure and the Local Network Gateway representing the on-premises network.",
    category: "VPN Solutions"
  }
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
