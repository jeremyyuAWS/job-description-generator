import { JobDescription } from '../types';

export interface Template {
  id: string;
  name: string;
  category: TemplateCategory;
  description: string;
  jobDescription: JobDescription;
}

export type TemplateCategory = 
  | 'Technology'
  | 'Marketing'
  | 'Sales'
  | 'Finance'
  | 'Human Resources'
  | 'Operations'
  | 'Customer Service'
  | 'Healthcare'
  | 'Education'
  | 'Legal'
  | 'Design'
  | 'Administration'
  | 'Research';

// Template data
export const templates: Template[] = [
  {
    id: 'software-engineer',
    name: 'Software Engineer',
    category: 'Technology',
    description: 'A standard template for software engineering roles focused on development skills.',
    jobDescription: {
      title: 'Software Engineer',
      seniority: 'Mid-Level',
      employmentType: 'Full-Time',
      remoteOption: 'Hybrid',
      teamSize: '5-10 people',
      reportingTo: 'Engineering Manager',
      tools: 'JavaScript, React, Node.js, Git, AWS',
      sections: {
        summary: {
          content: 'We are seeking a talented Software Engineer to join our development team. In this role, you will design, develop, and implement software solutions that meet our business requirements. You will collaborate with cross-functional teams to deliver high-quality code that is scalable, maintainable, and efficient.',
          suggestions: []
        },
        responsibilities: {
          content: '• Design, develop, and maintain software applications using JavaScript, React, and Node.js\n• Collaborate with product managers, designers, and other engineers to deliver features\n• Write clean, testable code with appropriate documentation\n• Participate in code reviews to ensure code quality and share knowledge\n• Troubleshoot and debug applications to optimize performance\n• Implement automated testing to ensure application reliability\n• Stay current with emerging trends and technologies',
          suggestions: []
        },
        requiredQualifications: {
          content: '• Bachelor\'s degree in Computer Science or equivalent practical experience\n• 2-4 years of experience in software development\n• Proficiency in JavaScript, including modern ES6+ features\n• Experience with React.js and building responsive web applications\n• Knowledge of Node.js backend development\n• Familiarity with version control systems (Git)\n• Strong problem-solving skills and attention to detail\n• Good communication and collaboration abilities',
          suggestions: []
        },
        preferredQualifications: {
          content: '• Experience with TypeScript and static typing\n• Knowledge of cloud services (AWS, Google Cloud, or Azure)\n• Familiarity with CI/CD pipelines and DevOps practices\n• Understanding of database technologies (SQL and NoSQL)\n• Experience with agile development methodologies\n• Prior work with microservice architectures\n• Open source contributions',
          suggestions: []
        },
        benefits: {
          content: '• Competitive salary and performance bonuses\n• Comprehensive health, dental, and vision insurance\n• 401(k) matching program\n• Flexible work arrangements and remote options\n• Professional development budget\n• Regular team-building events\n• Casual work environment with modern office amenities\n• Paid time off and company holidays',
          suggestions: []
        },
        companyBlurb: {
          content: 'Our company builds innovative software solutions that help businesses streamline their operations and improve customer experiences. We foster a collaborative culture where creativity, continuous learning, and work-life balance are valued. Join our team to work on challenging projects in a supportive environment where your ideas matter.',
          suggestions: []
        }
      },
      tone: 'Professional'
    }
  },
  {
    id: 'product-manager',
    name: 'Product Manager',
    category: 'Technology',
    description: 'A comprehensive template for product management positions focused on strategy and execution.',
    jobDescription: {
      title: 'Product Manager',
      seniority: 'Mid-Level',
      employmentType: 'Full-Time',
      remoteOption: 'Hybrid',
      teamSize: '3-5 people',
      reportingTo: 'Director of Product',
      tools: 'Jira, Figma, Google Analytics, Amplitude, SQL',
      sections: {
        summary: {
          content: 'We are looking for a skilled Product Manager to drive the strategy and execution of our digital products. In this role, you will work at the intersection of user needs, business goals, and technology to define product vision and roadmap. You will lead cross-functional teams to deliver exceptional products that solve real customer problems.',
          suggestions: []
        },
        responsibilities: {
          content: '• Own the product roadmap and strategy for assigned products or features\n• Conduct user research and competitive analysis to identify market opportunities\n• Define product requirements and create detailed specifications\n• Work closely with engineering, design, and marketing teams to deliver successful products\n• Prioritize features and enhancements based on business value and user impact\n• Track and analyze key metrics to measure product performance\n• Communicate product plans, benefits, and results to various stakeholders\n• Manage the entire product lifecycle from conception to launch and post-release refinement',
          suggestions: []
        },
        requiredQualifications: {
          content: '• Bachelor\'s degree in Business, Computer Science, or related field\n• 3+ years of experience in product management\n• Strong analytical and problem-solving skills\n• Excellent communication and presentation abilities\n• Experience with agile development methodologies\n• Ability to translate business requirements into product specifications\n• Data-driven decision-making approach\n• Basic understanding of UX design principles',
          suggestions: []
        },
        preferredQualifications: {
          content: '• MBA or other advanced degree\n• Experience with analytics tools (Google Analytics, Amplitude, Mixpanel)\n• Knowledge of SQL for data analysis\n• Background in the same industry as our product\n• Technical background or experience working closely with development teams\n• Previous experience launching successful products\n• Certification in product management or agile methodologies',
          suggestions: []
        },
        benefits: {
          content: '• Competitive salary and bonus structure based on product performance\n• Comprehensive health benefits package\n• Stock options and equity grants\n• Flexible work arrangements\n• Professional development opportunities\n• Paid parental leave\n• Education reimbursement program\n• Regular team events and activities',
          suggestions: []
        },
        companyBlurb: {
          content: 'Our company creates innovative digital solutions that transform how businesses engage with their customers. We believe in a collaborative approach to product development where every team member\'s input is valued. Our culture emphasizes continuous learning, data-driven decision making, and maintaining a healthy work-life balance. Join us to build products that make a difference in people\'s lives.',
          suggestions: []
        }
      },
      tone: 'Professional'
    }
  },
  {
    id: 'marketing-manager',
    name: 'Marketing Manager',
    category: 'Marketing',
    description: 'A template for marketing management roles with a focus on digital campaigns and analytics.',
    jobDescription: {
      title: 'Marketing Manager',
      seniority: 'Mid-Level',
      employmentType: 'Full-Time',
      remoteOption: 'Hybrid',
      teamSize: '3-5 people',
      reportingTo: 'Director of Marketing',
      tools: 'Google Analytics, HubSpot, Mailchimp, Adobe Creative Suite, Social Media Platforms',
      sections: {
        summary: {
          content: 'We are seeking a creative and data-driven Marketing Manager to develop and execute marketing strategies that drive brand awareness, customer acquisition, and business growth. The ideal candidate will have experience managing multi-channel campaigns and a strong understanding of digital marketing techniques.',
          suggestions: []
        },
        responsibilities: {
          content: '• Develop comprehensive marketing strategies aligned with business objectives\n• Plan and execute digital marketing campaigns across multiple channels\n• Manage the marketing budget and optimize spending for maximum ROI\n• Create and curate engaging content for various platforms\n• Analyze campaign performance and customer data to inform marketing decisions\n• Collaborate with the design team to create compelling marketing materials\n• Maintain brand consistency across all marketing initiatives\n• Stay current on marketing trends and best practices',
          suggestions: []
        },
        requiredQualifications: {
          content: '• Bachelor\'s degree in Marketing, Business, or related field\n• 3+ years of experience in marketing, with a focus on digital channels\n• Experience managing social media campaigns and content calendars\n• Proficiency with marketing analytics tools and data analysis\n• Strong project management and organizational skills\n• Excellent written and verbal communication abilities\n• Experience with email marketing platforms and CRM systems',
          suggestions: []
        },
        preferredQualifications: {
          content: '• MBA or advanced degree in Marketing\n• Experience with paid advertising platforms (Google Ads, Facebook Ads)\n• Knowledge of SEO/SEM and content marketing strategies\n• Experience with marketing automation tools\n• Understanding of customer journey mapping and funnel optimization\n• Background in our industry or market\n• Graphic design skills and experience with Adobe Creative Suite',
          suggestions: []
        },
        benefits: {
          content: '• Competitive salary and performance-based bonuses\n• Comprehensive health, dental, and vision insurance\n• 401(k) matching program\n• Flexible work arrangements\n• Professional development budget\n• Marketing conference and event attendance\n• Latest technology and tools for marketing success\n• Collaborative and creative work environment',
          suggestions: []
        },
        companyBlurb: {
          content: 'Our company provides innovative solutions that help businesses thrive in today\'s competitive marketplace. We value creativity, data-driven decision making, and a collaborative approach to marketing. Our team is passionate about creating meaningful connections with customers and driving measurable results. Join us to grow your marketing career in an environment that fosters professional development and creative expression.',
          suggestions: []
        }
      },
      tone: 'Professional'
    }
  },
  {
    id: 'data-analyst',
    name: 'Data Analyst',
    category: 'Technology',
    description: 'A template for data analysis roles with emphasis on analytical skills and business intelligence.',
    jobDescription: {
      title: 'Data Analyst',
      seniority: 'Mid-Level',
      employmentType: 'Full-Time',
      remoteOption: 'Remote',
      teamSize: '3-5 people',
      reportingTo: 'Data Science Manager',
      tools: 'SQL, Excel, Tableau, Python, R, Power BI',
      sections: {
        summary: {
          content: 'We are looking for a detail-oriented Data Analyst to help transform our data into insights that drive business decisions. The ideal candidate will have strong analytical skills, expertise in data modeling, and the ability to communicate complex findings in a clear, actionable way to stakeholders across the organization.',
          suggestions: []
        },
        responsibilities: {
          content: '• Collect, process, and analyze data from multiple sources\n• Create and maintain dashboards and reports to track key metrics\n• Identify trends, patterns, and opportunities in complex datasets\n• Collaborate with cross-functional teams to understand data needs\n• Develop and implement data quality processes\n• Create visualizations that effectively communicate insights\n• Support business decision-making with data-driven recommendations\n• Document data processes and methodologies',
          suggestions: []
        },
        requiredQualifications: {
          content: '• Bachelor\'s degree in Statistics, Mathematics, Computer Science, or related field\n• 2+ years of experience in data analysis or business intelligence\n• Proficiency in SQL and experience with relational databases\n• Strong skills in data visualization tools (Tableau, Power BI)\n• Experience with Excel for advanced data analysis\n• Ability to transform raw data into meaningful insights\n• Strong problem-solving and critical thinking skills\n• Excellent communication skills for presenting data to non-technical audiences',
          suggestions: []
        },
        preferredQualifications: {
          content: '• Master\'s degree in a quantitative field\n• Experience with programming languages like Python or R\n• Knowledge of statistical analysis and methods\n• Experience with data warehousing and ETL processes\n• Background in our industry or with similar data types\n• Familiarity with machine learning concepts\n• Experience with big data technologies (Hadoop, Spark)\n• Project management experience',
          suggestions: []
        },
        benefits: {
          content: '• Competitive salary based on experience\n• Comprehensive health, dental, and vision benefits\n• 401(k) retirement plan with company match\n• Flexible remote work policy\n• Professional development opportunities\n• Tuition reimbursement for relevant coursework\n• Modern tools and technology\n• Collaborative team environment',
          suggestions: []
        },
        companyBlurb: {
          content: 'Our company leverages data to drive innovation and solve complex business challenges. We believe in making decisions based on evidence and insights rather than hunches. Our analytics team plays a crucial role in helping the organization understand customer behavior, optimize operations, and identify new opportunities. Join us to work with diverse datasets in a collaborative environment where your analytical skills will have a real impact.',
          suggestions: []
        }
      },
      tone: 'Professional'
    }
  },
  {
    id: 'hr-manager',
    name: 'HR Manager',
    category: 'Human Resources',
    description: 'A template for HR management positions focused on employee experience and company culture.',
    jobDescription: {
      title: 'HR Manager',
      seniority: 'Mid-Level',
      employmentType: 'Full-Time',
      remoteOption: 'Hybrid',
      teamSize: '2-4 people',
      reportingTo: 'Director of Human Resources',
      tools: 'HRIS Systems, ATS, Microsoft Office, Performance Management Software',
      sections: {
        summary: {
          content: 'We are seeking an experienced HR Manager to oversee our human resources functions and foster a positive workplace culture. The ideal candidate will have strong interpersonal skills, knowledge of HR best practices, and the ability to implement programs that attract, develop, and retain top talent while ensuring compliance with employment laws and regulations.',
          suggestions: []
        },
        responsibilities: {
          content: '• Manage full-cycle recruitment for various departments\n• Develop and implement HR policies and procedures\n• Oversee employee relations, performance management, and engagement initiatives\n• Administer benefits programs and address employee inquiries\n• Ensure compliance with labor laws and regulations\n• Conduct onboarding and offboarding processes\n• Coordinate training and development programs\n• Partner with leadership on organizational development initiatives',
          suggestions: []
        },
        requiredQualifications: {
          content: '• Bachelor\'s degree in Human Resources, Business Administration, or related field\n• 3+ years of experience in human resources management\n• Knowledge of federal and state employment laws and regulations\n• Experience with HRIS and ATS systems\n• Strong interpersonal and conflict resolution skills\n• Excellent communication and presentation abilities\n• Demonstrated ability to maintain confidentiality\n• Experience developing HR policies and procedures',
          suggestions: []
        },
        preferredQualifications: {
          content: '• Master\'s degree in HR or related field\n• PHR, SPHR, or SHRM certification\n• Experience in our industry or similar organizational structure\n• Background in talent development and succession planning\n• Knowledge of compensation and benefits administration\n• Experience with change management and organizational development\n• Multi-state or international HR experience\n• Demonstrated leadership in diversity and inclusion initiatives',
          suggestions: []
        },
        benefits: {
          content: '• Competitive salary and bonus structure\n• Comprehensive health, dental, and vision insurance\n• 401(k) with employer matching\n• Professional development opportunities and certification support\n• Flexible work arrangements\n• Generous paid time off policy\n• Employee wellness program\n• Team building events and activities',
          suggestions: []
        },
        companyBlurb: {
          content: 'Our company believes that our success depends on creating an exceptional employee experience. We foster a culture of respect, inclusion, and continuous growth where every team member can thrive. As an organization committed to innovation, we value fresh perspectives and collaborative problem-solving. Join our HR team to help build and maintain a workplace where talent is recognized, developed, and celebrated.',
          suggestions: []
        }
      },
      tone: 'Professional'
    }
  },
  {
    id: 'data-scientist',
    name: 'Data Scientist',
    category: 'Technology',
    description: 'A template for data scientist roles with a focus on advanced analytics and machine learning.',
    jobDescription: {
      title: 'Data Scientist',
      seniority: 'Mid-Level',
      employmentType: 'Full-Time',
      remoteOption: 'Remote',
      teamSize: '4-8 people',
      reportingTo: 'Lead Data Scientist',
      tools: 'Python, R, SQL, TensorFlow, scikit-learn, Spark',
      sections: {
        summary: {
          content: 'We are seeking a skilled Data Scientist to analyze large datasets and deploy machine learning models. You will work alongside cross-functional teams to derive insights and drive data-centric decision making.',
          suggestions: []
        },
        responsibilities: {
          content: '• Develop and implement machine learning models and algorithms\n• Analyze and visualize large and complex data sets\n• Collaborate with data engineers and business stakeholders to identify business challenges\n• Perform data cleaning, feature engineering, and exploratory data analysis\n• Communicate findings through reports and presentations\n• Stay current with emerging data science trends and technologies',
          suggestions: []
        },
        requiredQualifications: {
          content: '• Bachelor’s or Master’s degree in Data Science, Computer Science, Statistics, or a related field\n• 2+ years of experience in data science or related analytical roles\n• Proficiency in Python and R\n• Experience with machine learning frameworks such as TensorFlow or scikit-learn\n• Strong analytical and problem-solving skills\n• Ability to communicate complex concepts to non-technical audiences',
          suggestions: []
        },
        preferredQualifications: {
          content: '• Experience with big data technologies such as Spark or Hadoop\n• Knowledge of deep learning and neural networks\n• Background in statistical modeling and predictive analytics\n• Familiarity with data visualization tools like Tableau or Power BI\n• Prior experience in a similar industry',
          suggestions: []
        },
        benefits: {
          content: '• Competitive salary and performance bonuses\n• Comprehensive health benefits package\n• Flexible work arrangements and remote work options\n• Professional development opportunities\n• Collaborative and innovative team environment\n• Generous paid time off and wellness programs',
          suggestions: []
        },
        companyBlurb: {
          content: 'Our company is committed to leveraging data to drive strategic decisions. Join our team to work on exciting projects where your analytical skills and innovative ideas will be valued.',
          suggestions: []
        }
      },
      tone: 'Professional'
    }
  },
  {
    id: 'content-strategist',
    name: 'Content Strategist',
    category: 'Marketing',
    description: 'A template for content strategist roles focused on overseeing content creation and marketing initiatives.',
    jobDescription: {
      title: 'Content Strategist',
      seniority: 'Mid-Level',
      employmentType: 'Full-Time',
      remoteOption: 'Hybrid',
      teamSize: '3-6 people',
      reportingTo: 'Marketing Director',
      tools: 'Content Management Systems, SEO tools, Google Analytics, Social Media Platforms',
      sections: {
        summary: {
          content: 'We are seeking an innovative Content Strategist to enhance our brand through compelling content and strategic marketing initiatives. You will design content strategies that align with business objectives and engage our target audience.',
          suggestions: []
        },
        responsibilities: {
          content: '• Develop and implement comprehensive content strategies\n• Oversee content creation for various digital platforms\n• Optimize content for SEO and user engagement\n• Coordinate with marketing and design teams for cohesive campaigns\n• Analyze content performance and adjust strategies accordingly\n• Manage content calendars and ensure timely delivery',
          suggestions: []
        },
        requiredQualifications: {
          content: '• Bachelor\'s degree in Marketing, Communications, or related field\n• 2+ years of experience in content strategy or digital marketing\n• Excellent writing and editing skills\n• Familiarity with SEO best practices and content management systems\n• Strong analytical and project management abilities\n• Ability to collaborate with cross-functional teams',
          suggestions: []
        },
        preferredQualifications: {
          content: '• Experience with social media strategy and campaign management\n• Knowledge of digital marketing analytics\n• Background in creative content production\n• Previous experience in a similar role within a dynamic industry\n• Certification in digital marketing or content management',
          suggestions: []
        },
        benefits: {
          content: '• Competitive salary and performance incentives\n• Comprehensive health, dental, and vision insurance\n• Flexible work arrangements and remote options\n• Professional development and training programs\n• Vibrant and creative work environment\n• Generous paid time off and holiday benefits',
          suggestions: []
        },
        companyBlurb: {
          content: 'Our company prides itself on innovative digital marketing strategies that drive engagement and growth. Join us and contribute your creative flair to our evolving content landscape.',
          suggestions: []
        }
      },
      tone: 'Professional'
    }
  },
  {
    id: 'account-executive',
    name: 'Account Executive',
    category: 'Sales',
    description: 'A template for account executive roles focusing on client acquisition and relationship management.',
    jobDescription: {
      title: 'Account Executive',
      seniority: 'Mid-Level',
      employmentType: 'Full-Time',
      remoteOption: 'Hybrid',
      teamSize: '3-7 people',
      reportingTo: 'Sales Manager',
      tools: 'CRM Software, Microsoft Office, Sales Automation Tools, Email Outreach Platforms',
      sections: {
        summary: {
          content: 'We are seeking a dynamic Account Executive to drive sales growth by acquiring new business and managing client relationships. The ideal candidate will have excellent communication skills and a proven track record in sales.',
          suggestions: []
        },
        responsibilities: {
          content: '• Identify and target potential clients\n• Conduct sales presentations and product demos\n• Manage and nurture client relationships\n• Negotiate contracts and close deals\n• Collaborate with marketing and product teams to align strategies\n• Track sales metrics and generate performance reports\n• Stay current on industry trends and competitive landscape',
          suggestions: []
        },
        requiredQualifications: {
          content: '• Bachelor’s degree in Business, Marketing, or related field\n• 2+ years of experience in sales or account management\n• Strong negotiation and communication skills\n• Proven ability to meet and exceed sales targets\n• Experience using CRM systems and sales automation tools\n• Ability to work in a fast-paced, dynamic environment',
          suggestions: []
        },
        preferredQualifications: {
          content: '• Experience in our industry or similar markets\n• Demonstrated success in acquiring and managing key accounts\n• Familiarity with digital sales tools and platforms\n• Certification in sales or account management is a plus\n• Willingness to travel as needed',
          suggestions: []
        },
        benefits: {
          content: '• Competitive base salary with commission structure\n• Comprehensive benefits package including health and dental\n• Flexible work arrangements\n• Ongoing training and professional development\n• Collaborative team environment with regular sales incentives\n• Paid time off and company events',
          suggestions: []
        },
        companyBlurb: {
          content: 'Our company is known for its innovative approach to sales and customer relationships. Join our team to be a part of a dynamic environment where your contributions directly impact our success.',
          suggestions: []
        }
      },
      tone: 'Professional'
    }
  },
  {
    id: 'financial-analyst',
    name: 'Financial Analyst',
    category: 'Finance',
    description: 'A template for financial analyst roles focusing on financial planning and analysis.',
    jobDescription: {
      title: 'Financial Analyst',
      seniority: 'Mid-Level',
      employmentType: 'Full-Time',
      remoteOption: 'Hybrid',
      teamSize: '3-6 people',
      reportingTo: 'Finance Manager',
      tools: 'Excel, SQL, Financial Modeling Software, ERP Systems',
      sections: {
        summary: {
          content: 'We are seeking a detail-oriented Financial Analyst to support our financial planning and strategy initiatives. You will analyze financial data, generate forecasts, and provide insights to help drive business decisions.',
          suggestions: []
        },
        responsibilities: {
          content: '• Analyze financial data and create financial models\n• Prepare budget forecasts and variance analysis\n• Support strategic planning initiatives with data-driven insights\n• Collaborate with cross-functional teams to assess financial performance\n• Prepare financial reports for executive management\n• Monitor market trends and economic conditions to inform financial planning',
          suggestions: []
        },
        requiredQualifications: {
          content: '• Bachelor’s degree in Finance, Economics, or related field\n• 2+ years of experience in financial analysis or planning\n• Strong analytical and problem-solving skills\n• Proficiency in Excel and financial modeling tools\n• Excellent communication and presentation skills\n• Ability to work with large datasets and complex financial data',
          suggestions: []
        },
        preferredQualifications: {
          content: '• CFA or similar financial certification is a plus\n• Experience with ERP systems and financial planning software\n• Strong background in statistical analysis and forecasting\n• Familiarity with database query languages such as SQL\n• Previous experience in a similar industry',
          suggestions: []
        },
        benefits: {
          content: '• Competitive salary and bonus potential\n• Comprehensive health, dental, and vision insurance\n• 401(k) with company match\n• Flexible work arrangements\n• Professional development and certification support\n• Collaborative and innovative team environment',
          suggestions: []
        },
        companyBlurb: {
          content: 'Our company values precise financial analysis and strategic planning to drive business growth. Join us to apply your expertise in a challenging and rewarding environment where your insights have a tangible impact.',
          suggestions: []
        }
      },
      tone: 'Professional'
    }
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    category: 'Human Resources',
    description: 'A template for recruiter roles focused on talent acquisition and candidate management.',
    jobDescription: {
      title: 'Recruiter',
      seniority: 'Mid-Level',
      employmentType: 'Full-Time',
      remoteOption: 'Hybrid',
      teamSize: '2-4 people',
      reportingTo: 'HR Manager',
      tools: 'ATS Systems, LinkedIn Recruiter, Calendaring Tools, Microsoft Office',
      sections: {
        summary: {
          content: 'We are looking for a proactive Recruiter to identify, attract, and hire top talent. The ideal candidate will manage the full cycle recruitment process and collaborate with hiring managers to meet the company\'s staffing needs.',
          suggestions: []
        },
        responsibilities: {
          content: '• Manage end-to-end recruitment processes\n• Source candidates through various channels, including social media and job boards\n• Conduct initial screening and coordinate interviews\n• Collaborate with department heads to understand hiring needs\n• Maintain accurate candidate records in the ATS\n• Provide an excellent candidate experience from application to offer',
          suggestions: []
        },
        requiredQualifications: {
          content: '• Bachelor\'s degree in Human Resources or related field\n• 2+ years of experience in recruitment or talent acquisition\n• Strong communication and interpersonal skills\n• Proficiency in using ATS systems and social media recruitment tools\n• Ability to manage multiple roles simultaneously\n• Detail-oriented and well-organized',
          suggestions: []
        },
        preferredQualifications: {
          content: '• Experience in agency or corporate recruitment\n• Familiarity with various sourcing techniques\n• Certification in HR or recruitment is a plus\n• Strong negotiation and candidate management skills\n• Previous experience within our industry',
          suggestions: []
        },
        benefits: {
          content: '• Competitive compensation package\n• Comprehensive benefits including health, dental, and vision\n• Flexible work schedule and remote options\n• Professional development and training opportunities\n• Collaborative team culture and supportive work environment\n• Paid time off and holiday schedule',
          suggestions: []
        },
        companyBlurb: {
          content: 'Our company is dedicated to building a diverse and talented workforce. Join our HR team to drive recruitment initiatives and help shape the future of our organization.',
          suggestions: []
        }
      },
      tone: 'Professional'
    }
  },
  {
    id: 'operations-manager',
    name: 'Operations Manager',
    category: 'Operations',
    description: 'A template for operations manager roles focused on streamlining processes and improving efficiency.',
    jobDescription: {
      title: 'Operations Manager',
      seniority: 'Mid-Level',
      employmentType: 'Full-Time',
      remoteOption: 'Hybrid',
      teamSize: '4-8 people',
      reportingTo: 'Director of Operations',
      tools: 'Operational Software, Project Management Tools, Microsoft Office, ERP Systems',
      sections: {
        summary: {
          content: 'We are seeking an experienced Operations Manager to oversee daily operations and implement process improvements. You will be responsible for optimizing workflows and ensuring that business operations run smoothly.',
          suggestions: []
        },
        responsibilities: {
          content: '• Oversee daily operational activities and processes\n• Implement process improvement initiatives to enhance efficiency\n• Collaborate with cross-functional teams to identify operational challenges\n• Develop and monitor key performance indicators (KPIs)\n• Manage budgets, resources, and timelines for various projects\n• Ensure compliance with company policies and industry regulations',
          suggestions: []
        },
        requiredQualifications: {
          content: '• Bachelor’s degree in Business Administration or related field\n• 3+ years of experience in operations management\n• Strong organizational and problem-solving skills\n• Proficiency with project management and ERP software\n• Excellent communication and leadership abilities\n• Ability to work in a fast-paced environment',
          suggestions: []
        },
        preferredQualifications: {
          content: '• MBA or advanced degree is a plus\n• Experience with Lean or Six Sigma methodologies\n• Proven track record in process optimization\n• Familiarity with budgeting and financial planning\n• Prior experience in a similar industry',
          suggestions: []
        },
        benefits: {
          content: '• Competitive salary with performance incentives\n• Comprehensive health, dental and vision benefits\n• Retirement plan with employer matching\n• Flexible work arrangements\n• Opportunities for professional growth\n• Collaborative and supportive work culture',
          suggestions: []
        },
        companyBlurb: {
          content: 'Our company values operational excellence and continuous improvement. Join our team to help drive efficiency and streamline our processes in a dynamic work environment.',
          suggestions: []
        }
      },
      tone: 'Professional'
    }
  },
  {
    id: 'customer-support-specialist',
    name: 'Customer Support Specialist',
    category: 'Customer Service',
    description: 'A template for customer support specialist roles focused on providing exceptional service.',
    jobDescription: {
      title: 'Customer Support Specialist',
      seniority: 'Mid-Level',
      employmentType: 'Full-Time',
      remoteOption: 'Remote',
      teamSize: '3-6 people',
      reportingTo: 'Customer Service Manager',
      tools: 'Customer Support Software, CRM systems, Email, Live Chat',
      sections: {
        summary: {
          content: 'We are looking for a Customer Support Specialist to deliver top-notch support to our clients. You will handle inquiries, troubleshoot issues, and provide solutions that enhance customer satisfaction.',
          suggestions: []
        },
        responsibilities: {
          content: '• Respond promptly to customer inquiries via multiple channels\n• Troubleshoot and resolve customer issues effectively\n• Document and track customer interactions in the CRM system\n• Provide feedback to improve support processes\n• Collaborate with technical teams for advanced problem resolution\n• Maintain high levels of customer satisfaction',
          suggestions: []
        },
        requiredQualifications: {
          content: '• Bachelor’s degree or equivalent experience\n• 2+ years of experience in customer service or support roles\n• Excellent verbal and written communication skills\n• Ability to multi-task and manage time effectively\n• Familiarity with customer support software and tools\n• Strong problem-solving skills',
          suggestions: []
        },
        preferredQualifications: {
          content: '• Experience with CRM systems and live chat tools\n• Background in a technology-focused company\n• Certification in customer service excellence is a plus\n• Proven ability to work in a fast-paced environment\n• Strong empathy and interpersonal skills',
          suggestions: []
        },
        benefits: {
          content: '• Competitive salary and performance bonuses\n• Comprehensive benefits package including health, dental, and vision\n• Flexible work schedules and remote work options\n• Ongoing training and career development\n• Collaborative team environment\n• Generous paid time off and holidays',
          suggestions: []
        },
        companyBlurb: {
          content: 'Our company is dedicated to delivering excellent customer service at all times. Join our team to be part of a supportive environment where your expertise in customer care will help us enhance client satisfaction.',
          suggestions: []
        }
      },
      tone: 'Professional'
    }
  },
  {
    id: 'nurse-practitioner',
    name: 'Nurse Practitioner',
    category: 'Healthcare',
    description: 'A template for nurse practitioner roles focusing on patient care and clinical excellence.',
    jobDescription: {
      title: 'Nurse Practitioner',
      seniority: 'Mid-Level',
      employmentType: 'Full-Time',
      remoteOption: 'On-Site',
      teamSize: '5-10 people',
      reportingTo: 'Medical Director',
      tools: 'Electronic Health Records, Medical Diagnostic Tools, Clinical Guidelines',
      sections: {
        summary: {
          content: 'We are seeking a dedicated Nurse Practitioner to provide high-quality patient care. You will work in a collaborative environment, managing patient treatment plans and supporting overall clinical operations.',
          suggestions: []
        },
        responsibilities: {
          content: '• Conduct patient assessments and diagnose medical conditions\n• Develop and implement patient care plans\n• Collaborate with physicians and healthcare teams\n• Administer treatments and medications as prescribed\n• Monitor patient progress and adjust care plans as needed\n• Ensure compliance with clinical guidelines and regulatory standards',
          suggestions: []
        },
        requiredQualifications: {
          content: '• Master’s degree in Nursing and valid Nurse Practitioner certification\n• 2+ years of clinical experience as a Nurse Practitioner\n• Strong diagnostic and clinical decision-making skills\n• Excellent communication and interpersonal skills\n• Ability to work in a fast-paced clinical setting\n• Knowledge of electronic health records and medical software',
          suggestions: []
        },
        preferredQualifications: {
          content: '• Experience in a multi-disciplinary healthcare setting\n• Certification in advanced clinical practices\n• Demonstrated ability to lead and mentor junior staff\n• Familiarity with latest medical technologies and trends',
          suggestions: []
        },
        benefits: {
          content: '• Competitive salary and comprehensive benefits package\n• Medical, dental, and vision insurance\n• Retirement plan with employer matching\n• Opportunities for continuing education and professional development\n• Supportive and collaborative work environment\n• Generous paid time off and holiday schedule',
          suggestions: []
        },
        companyBlurb: {
          content: 'Our healthcare organization is committed to delivering exceptional patient care. Join our team and contribute to a supportive environment where clinical excellence is our top priority.',
          suggestions: []
        }
      },
      tone: 'Professional'
    }
  },
  {
    id: 'teacher',
    name: 'Teacher',
    category: 'Education',
    description: 'A template for teaching roles focusing on educational excellence and student engagement.',
    jobDescription: {
      title: 'Teacher',
      seniority: 'Mid-Level',
      employmentType: 'Full-Time',
      remoteOption: 'Hybrid',
      teamSize: 'Varies',
      reportingTo: 'Principal',
      tools: 'Learning Management Systems, Educational Software, Classroom Materials',
      sections: {
        summary: {
          content: 'We are seeking an experienced Teacher to create engaging and effective learning experiences. You will design curriculum and foster an environment where students excel academically and personally.',
          suggestions: []
        },
        responsibilities: {
          content: '• Develop and implement lesson plans that meet curriculum standards\n• Engage students with interactive teaching methods\n• Assess student performance and provide constructive feedback\n• Collaborate with faculty to improve educational strategies\n• Maintain classroom management and discipline\n• Participate in school events and professional development initiatives',
          suggestions: []
        },
        requiredQualifications: {
          content: '• Bachelor’s degree in Education or related field\n• Teaching certification or license\n• 2+ years of classroom teaching experience\n• Strong organizational and classroom management skills\n• Ability to adapt teaching methods to diverse learning styles\n• Excellent interpersonal and communication skills',
          suggestions: []
        },
        preferredQualifications: {
          content: '• Master’s degree in Education is a plus\n• Experience with educational technology and modern teaching tools\n• Proven track record in curriculum development\n• Passion for student growth and academic excellence',
          suggestions: []
        },
        benefits: {
          content: '• Competitive salary and benefits package\n• Health, dental, and vision insurance\n• Retirement savings plan\n• Professional development opportunities and training\n• Supportive work environment with resources for innovation\n• Paid time off and school holidays',
          suggestions: []
        },
        companyBlurb: {
          content: 'Our institution is dedicated to fostering a culture of educational excellence and innovation. Join our team to make a lasting impact on students and the broader community.',
          suggestions: []
        }
      },
      tone: 'Professional'
    }
  },
  {
    id: 'legal-advisor',
    name: 'Legal Advisor',
    category: 'Legal',
    description: 'A template for legal advisor roles focusing on providing expert legal counsel and support.',
    jobDescription: {
      title: 'Legal Advisor',
      seniority: 'Senior-Level',
      employmentType: 'Full-Time',
      remoteOption: 'Hybrid',
      teamSize: '2-4 people',
      reportingTo: 'General Counsel',
      tools: 'Legal Research Databases, Document Management Systems, Microsoft Office',
      sections: {
        summary: {
          content: 'We are seeking a seasoned Legal Advisor to provide expert counsel on legal matters, manage risk, and ensure compliance with applicable laws and regulations.',
          suggestions: []
        },
        responsibilities: {
          content: '• Advise on legal matters and regulatory requirements\n• Draft, review, and negotiate contracts and agreements\n• Conduct legal research and risk assessments\n• Collaborate with internal stakeholders to ensure compliance\n• Manage disputes and liaise with external legal counsel\n• Provide training on legal best practices within the organization',
          suggestions: []
        },
        requiredQualifications: {
          content: '• Juris Doctor (JD) degree and valid license to practice law\n• 5+ years of legal advisory experience\n• Strong understanding of corporate law, contract law, and compliance\n• Excellent analytical and problem-solving skills\n• Exceptional negotiation and communication abilities\n• Proven experience in managing legal risks and disputes',
          suggestions: []
        },
        preferredQualifications: {
          content: '• Experience in a corporate legal department\n• Prior work in a fast-paced legal environment\n• Advanced negotiation skills and conflict resolution experience\n• Expertise in regulatory compliance and legal research',
          suggestions: []
        },
        benefits: {
          content: '• Competitive salary with performance incentives\n• Comprehensive legal and health benefits\n• Flexible work arrangements\n• Professional growth and continuous training\n• Supportive team and dynamic work environment\n• Generous leave policies and work-life balance initiatives',
          suggestions: []
        },
        companyBlurb: {
          content: 'Our organization values integrity and legal excellence. Join our team as a Legal Advisor to help navigate complex legal landscapes and drive informed decision-making across the business.',
          suggestions: []
        }
      },
      tone: 'Professional'
    }
  },
  {
    id: 'ux-ui-designer',
    name: 'UX/UI Designer',
    category: 'Design',
    description: 'A template for UX/UI designer roles focusing on user experience and interface design.',
    jobDescription: {
      title: 'UX/UI Designer',
      seniority: 'Mid-Level',
      employmentType: 'Full-Time',
      remoteOption: 'Hybrid',
      teamSize: '3-6 people',
      reportingTo: 'Creative Director',
      tools: 'Figma, Sketch, Adobe XD, InVision, User Research Tools',
      sections: {
        summary: {
          content: 'We are searching for a creative UX/UI Designer to enhance our digital products through exceptional design. You will be responsible for translating user needs into intuitive interfaces that drive engagement.',
          suggestions: []
        },
        responsibilities: {
          content: '• Design wireframes, prototypes, and high-fidelity mockups\n• Conduct user research and usability testing\n• Collaborate with cross-functional teams to define design strategy\n• Create design systems and ensure brand consistency\n• Iterate designs based on feedback and user data\n• Stay updated on industry trends and design best practices',
          suggestions: []
        },
        requiredQualifications: {
          content: '• Bachelor’s degree in Design, Human-Computer Interaction, or related field\n• 2+ years of experience in UX/UI design\n• Proficiency in design tools such as Figma, Sketch, or Adobe XD\n• Strong portfolio showcasing user-centered design projects\n• Excellent communication and collaboration skills\n• Ability to balance creativity with practical functionality',
          suggestions: []
        },
        preferredQualifications: {
          content: '• Experience with user research and usability testing methodologies\n• Knowledge of HTML, CSS, and JavaScript for prototyping\n• Prior experience in a fast-paced tech environment\n• Certification or courses in UX design is a plus',
          suggestions: []
        },
        benefits: {
          content: '• Competitive salary and benefits package\n• Flexible work hours and remote work options\n• Professional development and creative workshops\n• Collaborative design team and innovative projects\n• Comprehensive health, dental, and vision insurance\n• Generous vacation and personal time off',
          suggestions: []
        },
        companyBlurb: {
          content: 'Our company is committed to pushing the boundaries of design and innovation. Join our design team to create user experiences that set industry benchmarks and delight customers.',
          suggestions: []
        }
      },
      tone: 'Professional'
    }
  },
  {
    id: 'office-administrator',
    name: 'Office Administrator',
    category: 'Administration',
    description: 'A template for office administrator roles focusing on streamlining office operations and administrative support.',
    jobDescription: {
      title: 'Office Administrator',
      seniority: 'Mid-Level',
      employmentType: 'Full-Time',
      remoteOption: 'Hybrid',
      teamSize: '3-5 people',
      reportingTo: 'Operations Manager',
      tools: 'Microsoft Office, Office Management Software, Communication Tools',
      sections: {
        summary: {
          content: 'We are seeking an Office Administrator to manage day-to-day administrative operations. You will ensure that office activities run smoothly and support the overall efficiency of our operations.',
          suggestions: []
        },
        responsibilities: {
          content: '• Oversee daily office operations and administrative tasks\n• Manage scheduling, correspondence, and document preparation\n• Coordinate meetings, events, and travel arrangements\n• Support finance and HR with administrative duties\n• Maintain office supplies and inventory\n• Ensure compliance with office policies and procedures',
          suggestions: []
        },
        requiredQualifications: {
          content: '• Bachelor’s degree or equivalent experience in office administration\n• 2+ years of experience in an administrative role\n• Excellent organizational and multitasking skills\n• Proficiency with office software and communication tools\n• Strong interpersonal skills and attention to detail\n• Ability to work independently and as part of a team',
          suggestions: []
        },
        preferredQualifications: {
          content: '• Experience in a fast-paced office environment\n• Familiarity with office management systems\n• Additional certification in office administration is a plus\n• Proven track record of efficiently managing administrative tasks',
          suggestions: []
        },
        benefits: {
          content: '• Competitive salary and benefits\n• Comprehensive health, dental, and vision insurance\n• Professional development opportunities\n• Supportive and collaborative work environment\n• Flexible work schedule\n• Generous paid time off and holiday schedule',
          suggestions: []
        },
        companyBlurb: {
          content: 'Our company values efficiency and smooth administrative operations. Join our team as an Office Administrator to support our organization and contribute to a productive work environment.',
          suggestions: []
        }
      },
      tone: 'Professional'
    }
  },
  {
    id: 'research-scientist',
    name: 'Research Scientist',
    category: 'Research',
    description: 'A template for research scientist roles focusing on innovation and advanced scientific inquiry.',
    jobDescription: {
      title: 'Research Scientist',
      seniority: 'Senior-Level',
      employmentType: 'Full-Time',
      remoteOption: 'Hybrid',
      teamSize: '4-8 people',
      reportingTo: 'Research Director',
      tools: 'Laboratory Equipment, Data Analysis Software, Research Databases, Scientific Tools',
      sections: {
        summary: {
          content: 'We are looking for an accomplished Research Scientist to lead and execute advanced research projects. You will drive innovation and expand our scientific knowledge in a collaborative and dynamic environment.',
          suggestions: []
        },
        responsibilities: {
          content: '• Design, conduct, and analyze scientific experiments\n• Collaborate with cross-functional teams to drive research initiatives\n• Publish findings in peer-reviewed journals\n• Manage research projects and secure funding\n• Present research results at conferences and seminars\n• Ensure compliance with safety and ethical standards',
          suggestions: []
        },
        requiredQualifications: {
          content: '• PhD in a relevant scientific discipline\n• 5+ years of research experience in an academic or industrial setting\n• Strong analytical and problem-solving skills\n• Proven track record of published research\n• Excellent communication and presentation abilities\n• Experience with grant writing and research funding processes',
          suggestions: []
        },
        preferredQualifications: {
          content: '• Demonstrated leadership in research environments\n• Experience in multidisciplinary collaborations\n• Advanced technical skills relevant to the research area\n• Familiarity with the latest trends and technologies in research',
          suggestions: []
        },
        benefits: {
          content: '• Competitive salary and research funding\n• Comprehensive health, dental, and vision benefits\n• Opportunities for professional development and conference attendance\n• Collaborative and innovative research environment\n• Flexible work arrangements\n• Generous paid time off and research grants',
          suggestions: []
        },
        companyBlurb: {
          content: 'Our company is dedicated to advancing scientific research and driving innovation. Join our team as a Research Scientist to push the boundaries of discovery and contribute to groundbreaking projects.',
          suggestions: []
        }
      },
      tone: 'Professional'
    }
  }
];

export const getTemplatesByCategory = (category: TemplateCategory): Template[] => {
  return templates.filter(template => template.category === category);
};

export const getAllTemplateCategories = (): TemplateCategory[] => {
  const categories = new Set<TemplateCategory>();
  templates.forEach(template => categories.add(template.category));
  return Array.from(categories);
};

export const getTemplateById = (id: string): Template | undefined => {
  return templates.find(template => template.id === id);
};