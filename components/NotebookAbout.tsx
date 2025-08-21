import styles from '@/styles/NotebookAbout.module.css';

interface NotebookCellProps {
  type: 'markdown' | 'code';
  content: string;
  cellNumber?: number;
  hasOutput?: boolean;
  outputContent?: string;
}

const NotebookCell = ({ type, content, cellNumber, hasOutput, outputContent }: NotebookCellProps) => {
  return (
    <div className={styles.cell}>
      <div className={styles.cellContainer}>
        {type === 'code' && (
          <div className={styles.inputPrompt}>
            In [{cellNumber || ' '}]:
          </div>
        )}
        <div className={`${styles.cellContent} ${type === 'code' ? styles.codeCell : styles.markdownCell}`}>
          {type === 'code' ? (
            <pre><code>{content}</code></pre>
          ) : (
            <div dangerouslySetInnerHTML={{ __html: content }} />
          )}
        </div>
      </div>
      {hasOutput && outputContent && (
        <div className={styles.outputContainer}>
          <div className={styles.outputPrompt}>
            Out[{cellNumber || ' '}]:
          </div>
          <div className={styles.outputContent}>
            <div dangerouslySetInnerHTML={{ __html: outputContent }} />
          </div>
        </div>
      )}
    </div>
  );
};

const NotebookAbout = () => {
  const cells: NotebookCellProps[] = [
    {
      type: 'markdown',
      content: `<h1>John Abascal</h1>
      <h3>Computer Science PhD Student at Northeastern University</h3>`
    },
    {
      type: 'code',
      cellNumber: 1,
      content: `# About Me
bio = {
    "name": "John Abascal",
    "position": "PhD Student", 
    "university": "Northeastern University",
    "year": "4th year",
    "advisors": ["Jonathan Ullman", "Alina Oprea"],
    "research_interests": [
        "Privacy in Deep Learning",
        "Differential Privacy", 
        "Adversarial Machine Learning",
        "Machine Unlearning"
    ]
}

print(f"I am a {bio['year']} {bio['position']} at {bio['university']}")`,
      hasOutput: true,
      outputContent: `I am a 4th year PhD Student at Northeastern University`
    },
    {
      type: 'code',
      cellNumber: 2,
      content: `# Educational Background
education = {
    "undergraduate": {
        "degree": "B.S. in Pure Mathematics",
        "institution": "Florida State University",
        "thesis_advisors": ["Alec Kercheval", "Nathan Crock"]
    },
    "graduate": {
        "degree": "PhD in Computer Science", 
        "institution": "Northeastern University",
        "advisors": ["Jonathan Ullman", "Alina Oprea"]
    }
}

for level, details in education.items():
    print(f"{level.title()}: {details['degree']} at {details['institution']}")`,
      hasOutput: true,
      outputContent: `Undergraduate: B.S. in Pure Mathematics at Florida State University<br/>Graduate: PhD in Computer Science at Northeastern University`
    },
    {
      type: 'markdown',
      content: `<h2>Research Focus</h2>
      <p>My primary research interest is <strong>privacy in deep learning</strong>. More broadly, I am interested in both theoretical computer science and applied machine learning, including topics such as differential privacy, adversarial machine learning, and the trustworthiness of machine learning algorithms.</p>`
    },
    {
      type: 'code',
      cellNumber: 3,
      content: `# Research Areas
import numpy as np

research_areas = [
    "Privacy in Deep Learning",
    "Differential Privacy", 
    "Adversarial Machine Learning",
    "Machine Unlearning",
    "Theoretical Computer Science"
]

print("Current research focus:")
for i, area in enumerate(research_areas, 1):
    print(f"  {i}. {area}")`,
      hasOutput: true,
      outputContent: `Current research focus:<br/>
      &nbsp;&nbsp;1. Privacy in Deep Learning<br/>
      &nbsp;&nbsp;2. Differential Privacy<br/>
      &nbsp;&nbsp;3. Adversarial Machine Learning<br/>
      &nbsp;&nbsp;4. Machine Unlearning<br/>
      &nbsp;&nbsp;5. Theoretical Computer Science`
    },
    {
      type: 'markdown',
      content: `<h2>Contact Information</h2>
      <p><strong>Office:</strong> 177 Huntington, Boston, MA 02115</p>
      <p>Feel free to reach out if you're interested in collaboration or have questions about my research!</p>`
    }
  ];

  return (
    <div className={styles.notebook}>
      <div className={styles.notebookHeader}>
        <div className={styles.notebookTitle}>about.py</div>
        <div className={styles.kernelStatus}>Python 3 (ipykernel) | Idle</div>
      </div>
      <div className={styles.notebookContent}>
        {cells.map((cell, index) => (
          <NotebookCell key={index} {...cell} />
        ))}
      </div>
    </div>
  );
};

export default NotebookAbout;