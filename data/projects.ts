export type Project = {
  slug: string;
  title: string;
  tagline: string;
  type: "개인 프로젝트" | "팀 프로젝트";
  period: string;
  cardRoles: string[];
  cardTechStack: string[];
  description: string;
  github?: string;
  demo?: string;
  sections: {
    overview: string;
    background: string;
    role: string;
    techStack: string[];
    architecture: string;
    features: string[];
    problemSolution: string;
    retrospective: string;
  };
};

export const projects: Project[] = [
  {
    slug: "ai-healthcare",
    title: "AI Healthcare",
    tagline: "AI Healthcare",
    type: "개인 프로젝트",
    period: "2026.06 ~ 2026.07",
    cardRoles: ["기획", "DB 설계", "Backend 개발", "REST API", "OpenAI API", "HIRA API", "Docker"],
    cardTechStack: ["Java", "Spring Boot", "Spring Security", "JWT", "MySQL", "Docker", "OpenAI API", "HIRA API"],
    description: "OpenAI API와 HIRA 공공데이터를 활용하여 병원 검색 및 건강관리 기능을 구현한 Spring Boot 기반 백엔드 프로젝트입니다.",
    github: "https://github.com/sangwoodevelopment/ai-healthcare",
    sections: {
      overview: "AI와 공공데이터를 백엔드 서비스에 연결한 개인 프로젝트입니다.",
      background: "헬스케어 분야에서 활용할 수 있는 데이터를 서비스 형태로 구현하기 위해 시작했습니다.",
      role: "기획부터 백엔드 설계와 구현까지 개인 프로젝트 전반을 담당했습니다.",
      techStack: ["Java", "Spring Boot", "OpenAI API", "공공데이터 API"],
      architecture: "Spring Boot 서버를 중심으로 외부 AI API와 공공데이터 API를 연동하는 구조입니다.",
      features: ["AI API 연동", "공공데이터 조회", "REST API 제공"],
      problemSolution: "외부 데이터와 AI 응답을 안정적으로 서비스에 연결하는 방법을 고민하고 백엔드에서 요청과 응답 흐름을 관리했습니다.",
      retrospective: "외부 API 연동 과정에서 예외 처리와 응답 데이터 구조의 중요성을 학습했습니다.",
    },
  },
  {
    slug: "nutri-well",
    title: "Nutri-Well",
    tagline: "Nutrition & Wellness",
    type: "팀 프로젝트",
    period: "2024.05 ~ 2024.07",
    cardRoles: ["회원가입", "UI/UX", "실시간 유효성 검사", "GitHub 협업"],
    cardTechStack: ["Java", "Spring Boot", "JPA", "Spring Security", "OAuth2", "Oracle", "Thymeleaf"],
    description: "건강정보 관리와 회원 인증 기능을 구현한 Spring Boot 기반 팀 프로젝트입니다.",
    github: "https://github.com/sangwoodevelopment/nutri-well",
    sections: {
      overview: "영양과 건강 관리 기능을 백엔드 서비스로 구현한 팀 프로젝트입니다.",
      background: "건강 관리에 필요한 정보를 하나의 서비스에서 다루는 경험을 쌓기 위해 진행했습니다.",
      role: "팀원들과 역할을 나누어 백엔드 개발에 참여했습니다.",
      techStack: ["Java", "Spring Boot"],
      architecture: "Spring Boot 기반 REST API 서버 구조로 구성했습니다.",
      features: ["영양 및 건강 관리 기능", "REST API 제공"],
      problemSolution: "팀 단위 개발에서 기능별 역할과 API 규격을 맞추며 협업했습니다.",
      retrospective: "팀원 간 명확한 API 명세와 지속적인 소통의 중요성을 배웠습니다.",
    },
  },
  {
    slug: "telegram-automation",
    title: "Telegram Automation",
    tagline: "Telegram Automation",
    type: "개인 프로젝트",
    period: "2025.05 ~ 2025.07",
    cardRoles: ["Python", "Telegram Bot", "Google Sheets", "Automation"],
    cardTechStack: ["Python", "Telegram Bot API", "Google Sheets API"],
    description: "Telegram 메시지를 자동으로 처리하고 Google Sheets와 연동하여 데이터를 기록하는 자동화 프로젝트입니다.",
    sections: {
      overview: "Telegram API를 이용해 반복적인 메시지 기반 작업을 자동화한 프로젝트입니다.",
      background: "반복 작업을 줄이고 자동화 서비스의 요청 처리 흐름을 학습하기 위해 시작했습니다.",
      role: "서비스 설계와 백엔드 구현을 담당했습니다.",
      techStack: ["Java", "Spring Boot", "Telegram API"],
      architecture: "Telegram의 메시지를 백엔드에서 수신하고 정해진 로직에 따라 처리하는 구조입니다.",
      features: ["Telegram 메시지 연동", "반복 작업 자동화"],
      problemSolution: "메시지 이벤트를 안정적으로 처리할 수 있도록 요청 흐름을 분리해 구현했습니다.",
      retrospective: "이벤트 기반 요청 처리와 외부 API 연동 방식을 익혔습니다.",
    },
  },
];

export function getProject(slug: string) {
  const project = projects.find((item) => item.slug === slug);
  if (!project || slug !== "telegram-automation") return project;

  return {
    ...project,
    type: "개인 프로젝트" as Project["type"],
    description: "Python 기반 Telegram Bot과 Google Sheets를 활용한 업무 자동화 프로젝트",
  };
}

export type ProblemSolutionItem = {
  id: string;
  title: string;
  problem: string;
  cause?: string;
  solution: string;
  result: string;
  learned?: string;
};

export const aiHealthcareReadme = {
  title: "AI Healthcare",
  summary: "OpenAI API와 HIRA 공공데이터를 활용한 Spring Boot 기반 AI 헬스케어 백엔드 프로젝트",
  badges: [
    "Java",
    "Spring Boot",
    "Spring Security",
    "JWT",
    "JPA",
    "MySQL",
    "Docker",
    "OpenAI API",
    "HIRA API",
  ],
  overview: [
    "AI Healthcare는 OpenAI API와 HIRA 공공데이터를 활용하여 병원 검색 기능을 제공하는 Spring Boot 기반 백엔드 프로젝트입니다.",
    "사용자가 병원명, 주소, 진료과를 기준으로 병원을 검색할 수 있도록 구현했으며, Spring Security와 JWT를 적용하여 인증 기능을 구성했습니다.",
    "또한 DTO Validation과 공통 예외 처리 구조를 적용하여 안정적인 API를 구현하는 데 중점을 두었습니다.",
  ],
  background: [
    "사용자가 원하는 진료과의 병원을 보다 편하게 찾을 수 있는 서비스를 만들어 보고 싶었습니다.",
    "병원을 검색할 때 지역과 진료과를 함께 확인하는 과정이 번거롭다고 느꼈고, HIRA 공공데이터를 활용하면 실제 병원 정보를 기반으로 검색 기능을 구현할 수 있다고 생각했습니다.",
    "또한 생성형 AI를 단순히 호출하는 데 그치지 않고 백엔드 서비스와 연동해 보고 싶어 OpenAI API와 HIRA 공공데이터를 함께 활용한 AI Healthcare 프로젝트를 진행했습니다.",
  ],
  roleSummary: "개인 프로젝트로 기획부터 Backend 개발과 실행 환경 구성까지 직접 진행했습니다.",
  roles: [
    "프로젝트 기획",
    "DB 설계",
    "Spring Boot 기반 Backend 개발",
    "회원가입 및 로그인 기능 구현",
    "Spring Security 및 JWT 인증 구현",
    "HIRA 공공데이터 API 연동",
    "병원 데이터 저장 및 검색 API 구현",
    "OpenAI API 연동",
    "DTO Validation 적용",
    "공통 예외 처리 구조 구현",
    "Swagger를 활용한 API 문서화",
    "Docker 기반 실행 환경 구성",
  ],
  techStack: [
    { category: "Backend", items: ["Java 17", "Spring Boot", "Spring Security", "JPA (Hibernate)", "JWT", "Validation"] },
    { category: "Database", items: ["MySQL"] },
    { category: "External API", items: ["OpenAI API", "HIRA Open API"] },
    { category: "Documentation", items: ["Swagger (OpenAPI)"] },
    { category: "Development", items: ["Gradle", "Git", "GitHub", "IntelliJ IDEA", "Postman"] },
    { category: "Environment", items: ["Docker"] },
  ],
  architectureDiagram: `flowchart LR
    Client["Client"]
    SpringSecurity["Spring Security + JWT"]
    Controller["Controller"]
    Service["Service"]
    Repository["Repository (JPA)"]
    MySQL["MySQL"]
    OpenAI["OpenAI API"]
    HIRA["HIRA Open API"]

    Client --> SpringSecurity
    SpringSecurity --> Controller
    Controller --> Service
    Service --> Repository
    Repository --> MySQL
    Service --> OpenAI
    Service --> HIRA`,
  architectureDescription: [
    "Spring Boot를 중심으로 Controller, Service, Repository 계층을 분리하여 구현했습니다.",
    "병원 데이터는 HIRA Open API에서 조회한 뒤 MySQL에 저장하여 검색에 활용했고,",
    "OpenAI API는 Service 계층에서 호출하도록 구성했습니다.",
    "Spring Security와 JWT를 적용하여 인증이 필요한 API를 보호했습니다.",
  ],
  erdImage: "/images/ai-healthcare/erd.png",
  apiPreview: [
    { method: "POST", endpoint: "/api/auth/signup", description: "회원가입" },
    { method: "POST", endpoint: "/api/auth/login", description: "로그인" },
    { method: "GET", endpoint: "/api/hospitals", description: "병원 목록 조회" },
    { method: "GET", endpoint: "/api/hospitals/search", description: "병원 검색" },
    { method: "GET", endpoint: "/api/hospitals/{id}", description: "병원 상세 조회" },
  ],
  folderStructure: `src
├── auth
├── common
├── config
├── hospital
├── user
├── global
│   ├── exception
│   ├── response
│   └── security
└── AiHealthcareApplication.java`,
  screenshots: [
    { title: "로그인", src: "/images/projects/ai-healthcare/login.png" },
    { title: "병원 검색", src: "/images/projects/ai-healthcare/hospital-search.png" },
    { title: "Swagger", src: "/images/projects/ai-healthcare/swagger.png" },
  ],
  features: [
    {
      title: "JWT 기반 회원 인증",
      items: [
        "회원가입과 로그인",
        "Spring Security와 JWT를 활용한 인증 처리",
        "BCrypt를 활용한 비밀번호 암호화",
      ],
    },
    {
      title: "병원 데이터 연동 및 저장",
      items: [
        "HIRA 공공데이터 API 연동",
        "외부 병원 데이터를 MySQL에 저장",
        "기관 식별값을 기준으로 중복 저장 방지",
      ],
    },
    {
      title: "병원 검색",
      items: [
        "병원명, 주소, 진료과 기반 검색",
        "Pagination을 적용한 목록 조회",
      ],
    },
    {
      title: "AI 기능",
      items: [
        "OpenAI API를 Spring Boot 서비스와 연동",
        "사용자 요청을 기반으로 AI 응답을 제공하는 구조 구현",
      ],
    },
    {
      title: "일관된 예외 처리",
      items: [
        "BusinessException과 ErrorCode 분리",
        "GlobalExceptionHandler를 활용한 공통 오류 응답",
        "DTO Validation 오류 처리",
      ],
    },
    {
      title: "API 문서화",
      items: [
        "Swagger(OpenAPI)를 활용한 API 명세 제공",
        "인증이 필요한 API에 Bearer 인증 적용",
      ],
    },
  ],
  problems: [
    {
      id: "global-exception-handler",
      title: "Global Exception Handling",
      problem: "Controller와 Service마다 예외를 개별적으로 처리해야 했고, 오류 응답 형식도 일정하지 않았습니다.",
      cause: "예외 처리 방식이 통일되어 있지 않아 유지보수가 어려웠습니다.",
      solution: "BusinessException과 ErrorCode를 분리하고, GlobalExceptionHandler를 적용하여 공통 예외 처리 구조를 구현했습니다. 또한 DTO Validation 오류도 함께 처리하도록 구성했습니다.",
      result: "모든 API가 동일한 형식으로 오류를 반환하도록 변경되었고, 예외 처리 로직을 Controller에서 분리할 수 있었습니다.",
      learned: "예외 처리를 공통화하면 중복 코드를 줄이고 유지보수가 쉬운 구조를 만들 수 있다는 점을 배웠습니다.",
    },
    {
      id: "jwt-authentication",
      title: "JWT Authentication",
      problem: "로그인 이후 사용자를 식별할 방법이 필요했습니다.",
      cause: "세션 방식보다 REST API에 적합한 인증 구조가 필요했습니다.",
      solution: "Spring Security와 JWT를 적용하여 토큰 기반 인증을 구현했습니다.",
      result: "인증이 필요한 API를 보호하고 Swagger에서도 Bearer Token으로 테스트할 수 있도록 구성했습니다.",
      learned: "Spring Security의 인증 흐름과 JWT 기반 인증 구조를 이해하게 되었습니다.",
    },
    {
      id: "hira-api-integration",
      title: "HIRA Open API Integration",
      problem: "실제 병원 데이터를 직접 구축하기 어려웠습니다.",
      cause: "신뢰할 수 있는 병원 정보가 필요했습니다.",
      solution: "HIRA Open API를 연동하여 병원 데이터를 수집하고 MySQL에 저장했습니다.",
      result: "병원명, 주소, 진료과 기준 검색 기능을 구현했습니다.",
      learned: "외부 API를 연동할 때 응답 구조를 분석하고 DB 구조를 함께 설계하는 경험을 했습니다.",
    },
    {
      id: "pagination",
      title: "Pagination",
      problem: "병원 데이터를 한 번에 조회하면 응답이 비효율적이었습니다.",
      solution: "Spring Data Page를 적용했습니다.",
      result: "페이지 단위 조회가 가능해졌습니다.",
      learned: "대량 데이터를 조회할 때 Pagination이 왜 필요한지 이해하게 되었습니다.",
    },
    {
      id: "dto-validation",
      title: "DTO Validation",
      problem: "잘못된 요청 값이 그대로 전달될 수 있었습니다.",
      solution: "DTO Validation을 적용했습니다.",
      result: "입력 오류를 Controller 진입 전에 검증할 수 있었습니다.",
      learned: "입력값 검증은 서비스 안정성을 위한 기본이라는 점을 배웠습니다.",
    },
  ] satisfies ProblemSolutionItem[],
  troubleshooting: [
    { label: "Global Exception Handler", caseId: "global-exception-handler" },
    { label: "JWT Authentication", caseId: "jwt-authentication" },
    { label: "HIRA API Integration", caseId: "hira-api-integration" },
    { label: "DTO Validation", caseId: "dto-validation" },
    { label: "Pagination", caseId: "pagination" },
  ],
  retrospective: [
    {
      title: "잘했던 점",
      items: [
        "Spring Security와 JWT를 직접 적용하며 인증 구조를 구현했습니다.",
        "DTO Validation과 공통 예외 처리 구조를 적용하여 API의 일관성을 유지했습니다.",
        "OpenAI API와 HIRA Open API를 함께 연동하며 외부 API를 활용한 프로젝트를 경험했습니다.",
      ],
    },
    {
      title: "아쉬웠던 점",
      items: [
        "프로젝트 기간이 짧아 Redis, CI/CD, 테스트 코드까지 구현하지 못했습니다.",
        "성능 테스트와 대용량 데이터 처리에 대한 검증은 진행하지 못했습니다.",
      ],
    },
    {
      title: "앞으로 개선하고 싶은 점",
      items: [
        "Redis를 활용한 캐시 적용",
        "Docker Compose를 활용한 개발 환경 구성",
        "JUnit 기반 테스트 코드 작성",
        "GitHub Actions를 활용한 CI/CD 구축",
      ],
    },
  ],
  projectStatus: [
    { label: "Project Status", value: "Completed" },
    { label: "Version", value: "v1.0" },
    { label: "Last Updated", value: "2026.08" },
    { label: "Type", value: "Personal Project" },
  ],
};

export const nutriWellReadme = {
  title: "Nutri-Well",
  summary: "Spring Boot 기반 건강정보 관리 및 회원 인증 서비스",
  badges: ["Java", "Spring Boot", "Spring Security", "OAuth2", "JPA", "Oracle", "Thymeleaf"],
  overview: [
    "Nutri-Well은 건강정보를 관리하고 사용자 인증 기능을 제공하는 Spring Boot 기반 웹 프로젝트입니다.",
    "Spring Security와 OAuth2를 활용하여 사용자 인증을 구현했으며, JPA를 이용해 회원과 건강정보를 관리하는 기능을 개발했습니다.",
    "팀 프로젝트로 진행되었으며, 회원 인증과 건강정보 관리 기능을 담당했습니다.",
  ],
  background: [
    "Spring Boot 기반 웹 서비스를 직접 개발하며 회원 인증과 데이터 관리 기능을 구현해 보고 싶었습니다.",
    "단순한 로그인 기능이 아니라 Spring Security와 OAuth2를 실제 프로젝트에 적용하며 인증 흐름을 이해하는 것을 목표로 했습니다.",
    "또한 팀 프로젝트를 통해 GitHub와 Jira를 활용한 협업 경험도 함께 쌓고자 했습니다.",
  ],
  roleSummary: "팀 프로젝트에서 아래 역할을 담당했습니다.",
  roles: [
    "Spring Security와 OAuth2 기반 회원 인증 기능 구현",
    "JPA Entity 설계 및 회원·건강정보 관리 REST API 개발",
    "Oracle Database 연동 및 회원·건강정보 기능 테스트",
    "GitHub 협업 및 Jira 일정·작업 현황 관리",
  ],
  techStack: [
    { category: "Backend", items: ["Java", "Spring Boot", "Spring Security", "OAuth2", "JPA"] },
    { category: "Database", items: ["Oracle"] },
    { category: "View", items: ["Thymeleaf"] },
  ],
  features: [
    {
      title: "Spring Security 기반 회원 인증",
      items: ["회원가입", "로그인", "인증/인가 처리"],
    },
    {
      title: "OAuth2 로그인",
      items: ["OAuth2 기반 로그인 지원", "Spring Security와 연동"],
    },
    {
      title: "건강정보 관리",
      items: ["건강정보 등록", "건강정보 조회", "건강정보 수정", "건강정보 삭제"],
    },
    {
      title: "BMI / BMR 계산",
      items: ["사용자 정보를 기반으로 BMI 계산", "기초대사량(BMR) 계산 기능"],
    },
    {
      title: "회원정보 관리",
      items: ["회원정보 조회", "회원정보 수정"],
    },
  ],
  architectureImage: "/images/projects/nutri-well/architecture.png",
  erdImage: "/images/projects/nutri-well/erd.png",
  screenshots: [
    { title: "Screenshot 01", src: "/images/projects/nutri-well/screenshot-01.png" },
    { title: "Screenshot 02", src: "/images/projects/nutri-well/screenshot-02.png" },
    { title: "Screenshot 03", src: "/images/projects/nutri-well/screenshot-03.png" },
  ],
  problems: [
    {
      id: "nutri-well-case-01",
      title: "Spring Security Authentication",
      problem: "회원 인증 기능을 직접 구현해야 했습니다.",
      cause: "Spring Security의 인증 흐름과 설정을 이해해야 했습니다.",
      solution: "Spring Security를 적용하여 회원가입과 로그인 기능을 구현했습니다.",
      result: "인증이 필요한 기능을 구분하여 접근 권한을 제어할 수 있었습니다.",
      learned: "Spring Security의 인증 흐름과 Filter Chain의 동작 방식을 이해하게 되었습니다.",
    },
    {
      id: "nutri-well-case-02",
      title: "OAuth2 Login",
      problem: "일반 로그인 외에도 OAuth2 로그인을 지원해야 했습니다.",
      cause: "OAuth2 인증 절차와 Spring Security 연동 방식이 익숙하지 않았습니다.",
      solution: "OAuth2 로그인을 적용하여 Spring Security 인증 구조와 연동했습니다.",
      result: "일반 로그인과 OAuth2 로그인을 동일한 인증 구조에서 처리할 수 있었습니다.",
      learned: "OAuth2 인증 흐름과 Spring Security의 확장 구조를 이해하게 되었습니다.",
    },
    {
      id: "nutri-well-case-03",
      title: "JPA Entity Mapping",
      problem: "회원과 건강정보 데이터를 관계형 구조로 관리해야 했습니다.",
      cause: "객체와 테이블의 관계를 효율적으로 설계할 필요가 있었습니다.",
      solution: "JPA Entity와 연관관계를 설계하여 회원과 건강정보를 관리했습니다.",
      result: "JPA를 활용한 CRUD 기능을 구현할 수 있었습니다.",
      learned: "객체지향 모델과 관계형 데이터베이스를 연결하는 방식을 이해하게 되었습니다.",
    },
    {
      id: "nutri-well-case-04",
      title: "Project Collaboration",
      problem: "프로젝트 진행 중 Jira 사용이 활발하지 않아 일정과 작업 현황을 파악하기 어려웠습니다.",
      cause: "프로젝트 관리가 체계적으로 이루어지지 않았습니다.",
      solution: "Jira 이슈와 작업 현황을 지속적으로 업데이트하며 관리했습니다.",
      result: "팀원들이 진행 상황을 공유하기 쉬워졌고 일정 관리도 보다 원활하게 이루어졌습니다.",
      learned: "협업 도구는 사용하는 것보다 꾸준히 관리하는 것이 프로젝트 진행에 더 중요하다는 점을 배웠습니다.",
    },
  ] satisfies ProblemSolutionItem[],
  retrospective: [
    {
      title: "잘했던 점",
      items: [
        "Spring Security와 OAuth2를 프로젝트에 적용했습니다.",
        "JPA를 활용한 데이터 관리 구조를 구현했습니다.",
        "Jira를 활용해 프로젝트 진행 상황을 관리했습니다.",
      ],
    },
    {
      title: "아쉬웠던 점",
      items: [
        "테스트 코드까지 작성하지 못했습니다.",
        "프로젝트 기간이 짧아 성능 개선은 진행하지 못했습니다.",
      ],
    },
    {
      title: "앞으로 개선하고 싶은 점",
      items: ["테스트 코드 추가", "JWT 기반 인증 방식 적용", "Docker 환경 구성", "CI/CD 적용"],
    },
  ],
  projectStatus: [
    { label: "Status", value: "Completed" },
    { label: "Version", value: "v1.0" },
    { label: "Last Updated", value: "2026.08" },
    { label: "Type", value: "Team Project" },
  ],
};

export const telegramAutomationReadme = {
  title: "Telegram Automation",
  summary: "Python 기반 Telegram Bot과 Google Sheets를 활용한 업무 자동화 프로젝트",
  badges: ["Python", "Telegram Bot API", "Google Sheets API", "Pandas"],
  overview: [
    "Telegram Automation은 Telegram Bot API와 Google Sheets API를 활용하여 반복적인 메시지 처리와 데이터 기록을 자동화하기 위해 만든 개인 프로젝트입니다.",
    "특정 키워드를 감지해 자동으로 응답하고, 필요한 데이터를 Google Sheets에 기록하도록 구현했습니다.",
  ],
  background: [
    "반복적으로 처리하던 메시지 응답과 기록 업무를 줄이기 위해 Python을 활용한 자동화 프로그램을 만들어 보고 싶었습니다.",
    "Telegram Bot과 Google Sheets를 연동하면 메시지 처리와 데이터 기록을 한 번에 자동화할 수 있다고 판단해 프로젝트를 진행했습니다.",
  ],
  techStack: [
    { category: "Automation", items: ["Python", "Pandas"] },
    { category: "External API", items: ["Telegram Bot API", "Google Sheets API"] },
  ],
  roles: [
    "Python 자동화 로직 구현",
    "Telegram Bot API 연동",
    "키워드 감지 및 자동 응답 기능 구현",
    "Google Sheets API 연동",
    "메시지 및 데이터 기록 기능 구현",
  ],
  workflow: ["Telegram Message", "Keyword Detection", "Python Processing", "Auto Response", "Google Sheets Record"],
  features: ["키워드 감지", "자동 응답", "Google Sheets 기록", "데이터 누적 관리"],
  screenshots: [
    { title: "Screenshot 01", src: "/images/projects/telegram-automation/screenshot-01.png" },
    { title: "Screenshot 02", src: "/images/projects/telegram-automation/screenshot-02.png" },
    { title: "Screenshot 03", src: "/images/projects/telegram-automation/screenshot-03.png" },
  ],
  retrospective: [
    { title: "잘했던 점", items: ["실제 반복 업무를 자동화했습니다.", "Telegram과 Google Sheets를 하나의 흐름으로 연결했습니다."] },
    { title: "아쉬웠던 점", items: ["예외 처리와 로그 관리가 충분하지 않았습니다."] },
    { title: "앞으로 개선하고 싶은 점", items: ["로그 관리 추가", "예외 처리 보강", "DB 저장 방식 적용", "Docker 환경 구성"] },
  ],
  projectStatus: [
    { label: "Status", value: "Completed" },
    { label: "Version", value: "v1.0" },
    { label: "Type", value: "Personal Project" },
  ],
};
