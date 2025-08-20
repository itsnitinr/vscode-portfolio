export interface CVEntry {
  title: string;
  type: 'map' | 'time_table' | 'list' | 'nested_list';
  contents: TimeTableEntry[] | MapEntry[] | string[];
}

interface TimeTableEntry {
  title: string;
  institution?: string;
  year: string;
  description?: (string | DescriptionItem)[];
}

interface DescriptionItem {
  title?: string;
  contents?: string[];
}

interface MapEntry {
  name: string;
  value: string;
}

export const cvData: CVEntry[] = [
  {
    title: 'General Information',
    type: 'map',
    contents: [
      { name: 'Full Name', value: 'John Abascal' },
      { name: 'Date of Birth', value: 'October 20th, 1998' },
      { name: 'Languages', value: 'English, Spanish' },
    ],
  },
  {
    title: 'Education',
    type: 'time_table',
    contents: [
      {
        title: 'Doctor of Philosophy in Computer Science',
        institution: '<a href="https://www.khoury.northeastern.edu/">Northeastern University</a>, Boston, MA',
        year: '2021 - Present',
        description: [
          {
            title: 'Advisors',
            contents: [
              '<a href="https://www.ccs.neu.edu/home/alina/">Alina Oprea</a>',
              '<a href="https://jonathan-ullman.github.io/">Jonathan Ullman</a>',
            ],
          },
          'GPA: 3.90',
        ],
      },
      {
        title: 'Bachelor of Science in Mathematics',
        institution: '<a href="https://math.fsu.edu/">Florida State University</a>, Tallahassee, FL',
        year: '2017 - 2021',
        description: [
          {
            title: 'Honors Thesis',
            contents: [
              '<em>A Standardized Approach to Studying the Double Descent Phenomenon</em>',
            ],
          },
          {
            title: 'Advisors',
            contents: [
              '<a href="https://www.math.fsu.edu/~kercheva/">Alec Kercheval</a>',
              '<a href="https://www.sc.fsu.edu/people?uid=ndc08">Nathan Crock</a>',
            ],
          },
          'GPA: 3.79',
        ],
      },
    ],
  },
  {
    title: 'Research',
    type: 'time_table',
    contents: [
      {
        title: '"Phantom: General Trigger Attacks on Retrieval Augmented Language Generation"',
        institution: '<a href="https://arxiv.org/abs/2405.20485">arXiv</a>',
        year: '2024',
      },
      {
        title: '"TMI! Finetuned Models Leak Private Information from their Pretraining Data"',
        institution: '<a href="https://petsymposium.org/popets/2024/popets-2024-0075.php">PETS 2024</a>',
        year: '2023',
      },
      {
        title: '"SNAP: Efficient Extraction of Private Properties with Poisoning"',
        institution: '<a href="https://www.computer.org/csdl/proceedings-article/sp/2023/933600b935/1OXH05XwLIc">IEEE S&P 2023</a>',
        year: '2022',
      },
    ],
  },
  {
    title: 'Work Experience',
    type: 'time_table',
    contents: [
      {
        title: 'Student Researcher (Machine Unlearning)',
        institution: '<a href="https://about.google/">Google</a>, Cambridge, MA',
        year: 'Nov 2024 - Feb 2025',
      },
      {
        title: 'Applied Research Intern (Privacy Attacks on LLMs)',
        institution: '<a href="https://www.linkedin.com/">LinkedIn</a>, New York, NY',
        year: 'May 2024 - Aug 2024',
      },
      {
        title: 'Applied Research Intern (Differential Privacy)',
        institution: '<a href="https://www.linkedin.com/">LinkedIn</a>, Sunnyvale, CA',
        year: 'May 2023 - Aug 2023',
      },
      {
        title: 'Software Engineer Intern (iOS)',
        institution: '<a href="https://www.intuit.com/">Intuit</a>, Mountain View, CA',
        year: 'May 2021 - Aug 2021',
      },
      {
        title: 'Software Engineer Intern (iOS)',
        institution: '<a href="https://www.intuit.com/">Intuit</a>, Mountain View, CA',
        year: 'May 2020 - Aug 2020',
      },
      {
        title: 'Machine Learning Intern',
        institution: '<a href="https://labs.newsci.ai/">NewSci Labs</a>, Tallahassee, FL',
        year: 'Aug 2019 - May 2021',
      },
      {
        title: 'Software Engineer Intern',
        institution: '<a href="https://sphero.com/">Sphero</a>, Boulder, CO',
        year: 'May 2019 - Aug 2019',
      },
    ],
  },
  {
    title: 'Teaching Experience',
    type: 'time_table',
    contents: [
      {
        title: 'Learning Assistant',
        institution: '<a href="https://math.fsu.edu/">Florida State University</a>, Tallahassee, FL',
        year: 'Aug 2019 - Dec 2019',
        description: ['Calculus I'],
      },
      {
        title: 'Tutorial Assistant',
        institution: '<a href="https://math.fsu.edu/">Florida State University</a>, Tallahassee, FL',
        year: 'Aug 2018 - May 2019',
        description: ['College Algebra - Calculus III'],
      },
    ],
  },
  {
    title: 'Technical Skills',
    type: 'map',
    contents: [
      { name: 'Languages', value: 'Python, C++, Swift, JavaScript, MATLAB, Latex' },
      {
        name: 'Libraries and Tools',
        value: 'PyTorch, Opacus, scikit-learn, NumPy, Asyncio, Pandas, Keras, OpenCV, Matplotlib, PIL, Linux, Git, Jira, Jupyter, SQL, GraphQL',
      },
    ],
  },
  {
    title: 'Honors, Awards, and Involvement',
    type: 'map',
    contents: [
      { name: 'HSF Scholar', value: '2019, 2020, 2021' },
      { name: "President's List", value: 'Fall 2017, Fall 2018, Fall 2020' },
      { name: "Dean's List", value: 'Spring 2019, Fall 2019, Spring 2020, Spring 2021' },
      { name: 'Honors in the Major', value: 'Mathematics' },
      { name: 'President (2020 - 2021)', value: 'Society of Undergraduate Mathematics Majors (SUMS) at FSU' },
      { name: 'Florida Bright Futures Scholarship (2017)', value: 'FAS, Full Tuition' },
    ],
  },
  {
    title: 'Academic Interests',
    type: 'list',
    contents: [
      'Privacy Preserving Machine Learning, Differential Privacy, Adversarial Machine Learning',
    ],
  },
];