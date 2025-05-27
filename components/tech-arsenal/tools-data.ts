export interface Tool {
  name: string
  classification: string
  description: string
}

export const toolsData: Tool[] = [
  {
    name: "AWS",
    classification: "Cloud Platform",
    description:
      "Amazon Web Services provides on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered pay-as-you-go basis.",
  },
  {
    name: "GCP",
    classification: "Cloud Platform",
    description:
      "Google Cloud Platform offers cloud computing services that run on the same infrastructure that Google uses internally for its end-user products.",
  },
  {
    name: "Azure",
    classification: "Cloud Platform",
    description:
      "Microsoft Azure is a cloud computing service created by Microsoft for building, testing, deploying, and managing applications and services through Microsoft-managed data centers.",
  },
  {
    name: "Claude (Anthropic)",
    classification: "LLM / AI Model",
    description:
      "Claude is an AI assistant created by Vercel designed to be helpful, harmless, and honest, with advanced reasoning and conversation capabilities.",
  },
  {
    name: "ChatGPT (OpenAI)",
    classification: "LLM / AI Model",
    description:
      "ChatGPT is a large language model developed by OpenAI that can engage in conversational dialogue and provide human-like text responses.",
  },
  {
    name: "Supabase",
    classification: "Backend as a Service (BaaS)",
    description:
      "Supabase is an open-source Firebase alternative providing all the backend features developers need to build a product: database, authentication, storage, and more.",
  },
  {
    name: "Neon",
    classification: "Database",
    description:
      "Neon is a serverless Postgres database that separates storage and compute to offer autoscaling, branching, and bottomless storage.",
  },
  {
    name: "Windsurf",
    classification: "AI / Dev Tool",
    description:
      "Windsurf is an AI-powered development tool that helps developers write, understand, and debug code more efficiently.",
  },
  {
    name: "Cursor",
    classification: "AI Coding Assistant",
    description:
      "Cursor is an AI-first code editor that helps developers write, edit, and understand code through AI-powered assistance and code generation.",
  },
  {
    name: "V0.dev",
    classification: "Frontend UI Builder",
    description:
      "V0.dev is an AI-powered UI generation tool by Vercel that creates high-quality React and Tailwind CSS components from text descriptions.",
  },
  {
    name: "Clerk",
    classification: "Authentication / Identity",
    description:
      "Clerk is a complete authentication and user management solution that handles sign-ups, sign-ins, and user profile management.",
  },
  {
    name: "Auth0",
    classification: "Authentication / Identity",
    description:
      "Auth0 is an authentication and authorization platform that provides secure access to applications and APIs with various identity providers.",
  },
  {
    name: "Okta",
    classification: "Identity Management",
    description:
      "Okta is an identity and access management company that provides cloud software to help companies manage and secure user authentication.",
  },
  {
    name: "FastAPI",
    classification: "Backend Web Framework (Python)",
    description:
      "FastAPI is a modern, fast web framework for building APIs with Python based on standard Python type hints and async capabilities.",
  },
  {
    name: "Next.js",
    classification: "React Framework / Full-stack",
    description:
      "Next.js is a React framework that enables server-side rendering, static site generation, and building full-stack web applications.",
  },
  {
    name: "ShadCN",
    classification: "UI Component Library (Tailwind-based)",
    description:
      "ShadCN UI is a collection of reusable components built with Radix UI and Tailwind CSS, focusing on accessibility and customization.",
  },
  {
    name: "n8n",
    classification: "Workflow Automation",
    description:
      "n8n is an extendable workflow automation tool that enables connecting various services and applications through a visual interface.",
  },
  {
    name: "Make",
    classification: "Workflow Automation",
    description:
      "Make (formerly Integromat) is a visual platform that lets you design, build, and automate workflows connecting apps and services.",
  },
  {
    name: "Vercel",
    classification: "Hosting / Deployment Platform",
    description:
      "Vercel is a cloud platform for static sites and serverless functions that enables developers to deploy websites and web services globally.",
  },
  {
    name: "FastapiLabs",
    classification: "DevOps / FastAPI Infra Tool",
    description:
      "FastapiLabs provides infrastructure tools and deployment solutions specifically optimized for FastAPI applications.",
  },
  {
    name: "DBT",
    classification: "Data Transformation / Analytics Engineering",
    description:
      "DBT (data build tool) enables analytics engineers to transform data in their warehouses by writing SQL-based models with testing and documentation.",
  },
  {
    name: "Python",
    classification: "Programming Language",
    description:
      "Python is a high-level, interpreted programming language known for its readability, versatility, and extensive library ecosystem.",
  },
  {
    name: "Upstash",
    classification: "Redis / Kafka for Serverless",
    description:
      "Upstash provides serverless Redis and Kafka with per-request pricing, making it ideal for serverless and edge computing environments.",
  },
  {
    name: "Novu",
    classification: "Notification Infrastructure",
    description:
      "Novu is an open-source notification infrastructure designed to help developers manage all communication channels in one place.",
  },
  {
    name: "Findymail",
    classification: "Email Finder / Lead Gen",
    description:
      "Findymail is an email finder tool that helps sales teams and marketers discover and verify professional email addresses for lead generation.",
  },
  {
    name: "Prospeo",
    classification: "Prospecting / Lead Gen",
    description:
      "Prospeo is a lead generation and prospecting tool that helps businesses identify and connect with potential customers.",
  },
  {
    name: "Bounceban",
    classification: "Email Verification",
    description:
      "Bounceban is an email verification service that helps ensure email deliverability by checking for invalid or risky email addresses.",
  },
  {
    name: "Zerobounce",
    classification: "Email Verification",
    description:
      "Zerobounce is an email validation service that verifies email addresses, prevents bounces, and improves email deliverability rates.",
  },
  {
    name: "ClickUp",
    classification: "Project Management",
    description:
      "ClickUp is a cloud-based project management and collaboration platform that helps teams manage projects, tasks, and workflows.",
  },
  {
    name: "Postman",
    classification: "API Testing / Development",
    description:
      "Postman is an API platform for building and using APIs, offering tools for API testing, documentation, and collaboration.",
  },
  {
    name: "Playwright",
    classification: "End-to-End Testing Tool",
    description:
      "Playwright is a framework for web testing and automation that allows testing across all modern browsers with a single API.",
  },
  {
    name: "Airbyte",
    classification: "Data Integration / ETL",
    description:
      "Airbyte is an open-source data integration platform that helps move and consolidate data from different sources to destinations.",
  },
  {
    name: "DynamoDB",
    classification: "NoSQL Databases",
    description:
      "Amazon DynamoDB is a fully managed NoSQL database service that provides fast and predictable performance with seamless scalability.",
  },
  {
    name: "MongoDB",
    classification: "NoSQL Databases",
    description:
      "MongoDB is a source-available cross-platform document-oriented database program that uses JSON-like documents with optional schemas.",
  },
  {
    name: "Slack",
    classification: "Team Communication",
    description:
      "Slack is a messaging app for business that connects people to the information they need by bringing people together to work as one unified team.",
  },
  {
    name: "Yugabyte",
    classification: "Distributed SQL Database",
    description:
      "YugabyteDB is an open-source, high-performance distributed SQL database for global, internet-scale applications.",
  },
  {
    name: "GitHub",
    classification: "Code Repository / Version Control",
    description:
      "GitHub is a provider of Internet hosting for software development and version control using Git, offering distributed version control functionality.",
  },
  {
    name: "Notion",
    classification: "Documentation / Workspace",
    description:
      "Notion is an all-in-one workspace that combines notes, documents, wikis, and project management in a customizable interface.",
  },
  {
    name: "Airtable",
    classification: "Collaborative Database / Spreadsheet",
    description:
      "Airtable is a cloud collaboration service that combines the features of a database with the visual interface of a spreadsheet.",
  },
  {
    name: "Algolia",
    classification: "Search-as-a-Service",
    description:
      "Algolia is a search-as-a-service platform that enables developers to build search functionality into their applications with powerful APIs.",
  },
  // Adding new Voice AI category and technologies
  {
    name: "Vapi",
    classification: "Voice AI",
    description:
      "Vapi is a developer platform for building voice AI applications with natural language understanding capabilities, enabling conversational interfaces across various channels.",
  },
  {
    name: "Retellai",
    classification: "Voice AI",
    description:
      "Retellai is a platform that enables developers to create AI voice agents with natural-sounding conversations, supporting multiple languages and custom voices.",
  },
  {
    name: "Voiceflow",
    classification: "Voice AI",
    description:
      "Voiceflow is a collaborative design platform for creating, prototyping, and deploying conversational AI experiences across voice assistants and chatbots.",
  },
]
