# Resume PDF Setup Instructions

Your portfolio is now configured to serve a resume PDF from `/public/resume.pdf`. Follow these steps to add your resume:

## Option 1: Add an Existing PDF (Easiest)

1. Create a PDF of your resume with matching colors and professional design
2. Place the PDF file at: `public/resume.pdf`
3. Test the download by clicking "Download Resume" button on the site

## Option 2: Create PDF from the Template Below

I've created an HTML/CSS template below that matches your portfolio's design. You can:
1. Save it as an HTML file
2. Open in browser
3. Print to PDF (Cmd+P or Ctrl+P)
4. Save as `public/resume.pdf`

---

## HTML Resume Template (Copy Below Content)

Save this as `resume-template.html` and open in your browser. Customize with your information, then print to PDF.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rishi Dave - Resume</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #1a1a1a;
            background: white;
            padding: 0;
        }

        .container {
            max-width: 8.5in;
            height: 11in;
            margin: 0 auto;
            padding: 0.5in;
            background: white;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }

        @media print {
            body, .container {
                margin: 0;
                padding: 0;
                box-shadow: none;
                height: auto;
            }
        }

        /* Header */
        .header {
            border-bottom: 2px solid #00c9ff;
            padding-bottom: 0.25in;
            margin-bottom: 0.3in;
        }

        .name {
            font-size: 28px;
            font-weight: bold;
            color: #00c9ff;
            margin-bottom: 0.05in;
        }

        .title {
            font-size: 14px;
            color: #00b9eb;
            font-weight: 600;
            margin-bottom: 0.1in;
        }

        .contact {
            font-size: 11px;
            color: #555;
            display: flex;
            gap: 0.2in;
            flex-wrap: wrap;
        }

        .contact span {
            display: inline-block;
        }

        /* Sections */
        .section {
            margin-bottom: 0.25in;
        }

        .section-title {
            font-size: 13px;
            font-weight: bold;
            color: #00c9ff;
            text-transform: uppercase;
            letter-spacing: 1px;
            border-bottom: 1px solid #e0e0e0;
            padding-bottom: 0.05in;
            margin-bottom: 0.1in;
        }

        /* Experience */
        .experience-item {
            margin-bottom: 0.15in;
        }

        .job-title {
            font-weight: bold;
            font-size: 12px;
            color: #1a1a1a;
            display: flex;
            justify-content: space-between;
        }

        .company {
            font-size: 11px;
            color: #00c9ff;
            font-weight: 600;
        }

        .date {
            font-size: 10px;
            color: #888;
            font-style: italic;
        }

        .location {
            font-size: 10px;
            color: #888;
        }

        .description {
            font-size: 10px;
            margin-top: 0.05in;
            margin-left: 0.15in;
            color: #333;
        }

        .bullet {
            margin-left: 0.1in;
            margin-bottom: 0.03in;
        }

        /* Skills */
        .skill-category {
            margin-bottom: 0.1in;
            font-size: 11px;
        }

        .skill-name {
            font-weight: bold;
            color: #1a1a1a;
            display: inline-block;
            width: 1.5in;
        }

        .skill-list {
            display: inline-block;
            color: #555;
        }

        /* Projects */
        .project {
            margin-bottom: 0.12in;
            font-size: 10px;
        }

        .project-title {
            font-weight: bold;
            color: #1a1a1a;
            margin-bottom: 0.02in;
        }

        .project-desc {
            color: #555;
            margin-bottom: 0.02in;
        }

        .badges {
            display: flex;
            gap: 0.05in;
            flex-wrap: wrap;
            margin-top: 0.02in;
        }

        .badge {
            font-size: 9px;
            background: #f0f0f0;
            padding: 0.02in 0.05in;
            border-radius: 3px;
            color: #00c9ff;
        }

        /* Education */
        .edu-item {
            margin-bottom: 0.1in;
        }

        .degree {
            font-weight: bold;
            font-size: 11px;
            color: #1a1a1a;
        }

        .school {
            color: #00c9ff;
            font-size: 10px;
            font-weight: 600;
        }

        .details {
            font-size: 10px;
            color: #888;
        }

        .highlights {
            font-size: 10px;
            color: #555;
            margin-top: 0.02in;
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Header -->
        <div class="header">
            <div class="name">RISHI DAVE</div>
            <div class="title">Full-Stack Software Engineer & AI/ML Specialist</div>
            <div class="contact">
                <span>📧 rishipdave@gmail.com</span>
                <span>📱 (510) 894-9147</span>
                <span>📍 Riverside, CA</span>
                <span>💼 github.com/Rishi-Dave</span>
                <span>🔗 linkedin.com/in/rishi-dave1</span>
            </div>
        </div>

        <!-- Professional Summary -->
        <div class="section">
            <div class="section-title">Professional Summary</div>
            <p style="font-size: 10px; color: #555; line-height: 1.4;">
                Results-driven Software Engineer with 3+ years of experience building AI-powered systems and full-stack applications.
                Proven track record of delivering production-grade solutions that serve 500+ users, achieving 92% accuracy in ML models,
                and improving performance by 25%+. Expertise in Python, AI/ML, iOS development, and cloud architecture.
            </p>
        </div>

        <!-- Core Expertise -->
        <div class="section">
            <div class="section-title">Core Expertise</div>
            <div style="display: flex; gap: 0.3in; font-size: 10px;">
                <div>
                    <strong>Expert (4+ years):</strong> Python, Machine Learning, Data Analysis<br>
                    <strong>Proficient (2+ years):</strong> Swift/iOS, AWS, PyTorch, TensorFlow, Flask, React<br>
                    <strong>Technical:</strong> GPT APIs, RAG, MongoDB, DynamoDB, Docker, CI/CD
                </div>
            </div>
        </div>

        <!-- Experience -->
        <div class="section">
            <div class="section-title">Professional Experience</div>

            <div class="experience-item">
                <div class="job-title">
                    <span>Data Science Fellow</span>
                    <span class="date">June 2025 – Present</span>
                </div>
                <div class="company">UC Riverside, Information Technology Services</div>
                <div class="location">Riverside, CA</div>
                <ul class="description" style="list-style: none;">
                    <li class="bullet">• Engineered Python-based AI Agent using GPT-4 mini, adopted by 500+ UCR students for course scheduling</li>
                    <li class="bullet">• Architected robust MongoDB backend with vector database for 10,000+ course offerings using RAG</li>
                    <li class="bullet">• Reduced student decision-making time by 2+ hours per user through autonomous agent planning</li>
                </ul>
            </div>

            <div class="experience-item">
                <div class="job-title">
                    <span>Machine Learning Research Assistant</span>
                    <span class="date">April 2025 – Present</span>
                </div>
                <div class="company">UC Riverside, Computer Science Research Lab</div>
                <div class="location">Riverside, CA</div>
                <ul class="description" style="list-style: none;">
                    <li class="bullet">• Developed MiniRocket-based time series classification models, achieving 92% average accuracy</li>
                    <li class="bullet">• Implementing FPGA acceleration for 20x+ speedups over CPU baseline inference</li>
                    <li class="bullet">• Conducting research on efficient time series classification at scale across 106 UCR datasets</li>
                </ul>
            </div>

            <div class="experience-item">
                <div class="job-title">
                    <span>Software Engineering Intern</span>
                    <span class="date">June 2024 – September 2024</span>
                </div>
                <div class="company">Reeko Cabinets, LLC</div>
                <div class="location">Union City, CA</div>
                <ul class="description" style="list-style: none;">
                    <li class="bullet">• Engineered PyTorch-based linear regression model for parts demand forecasting</li>
                    <li class="bullet">• Improved prediction accuracy by 25% through consolidated dataset of 1000+ historical records</li>
                    <li class="bullet">• Designed automated ordering system minimizing stockout incidents and optimizing inventory</li>
                </ul>
            </div>

            <div class="experience-item">
                <div class="job-title">
                    <span>Software Engineer Intern</span>
                    <span class="date">June 2023 – August 2023</span>
                </div>
                <div class="company">Crest Data Systems</div>
                <div class="location">San Jose, CA</div>
                <ul class="description" style="list-style: none;">
                    <li class="bullet">• Developed custom Splunk app ingesting 1000+ log files per minute from HR server</li>
                    <li class="bullet">• Created real-time monitoring dashboards for system events and error tracking</li>
                    <li class="bullet">• Improved system stability by correcting 12% login error rate for enterprise clients</li>
                </ul>
            </div>
        </div>

        <!-- Featured Projects -->
        <div class="section">
            <div class="section-title">Featured Projects</div>

            <div class="project">
                <div class="project-title">MemoirAI - iOS Storytelling App</div>
                <div class="project-desc">Full-stack iOS app transforming photos to journal entries using GPT-4 Vision. Scalable Python backend on AWS Lambda with DynamoDB. Handled 500+ API requests, 75% data reduction.</div>
                <div class="badges">
                    <span class="badge">iOS</span>
                    <span class="badge">SwiftUI</span>
                    <span class="badge">GPT-4 Vision</span>
                    <span class="badge">AWS Lambda</span>
                    <span class="badge">DynamoDB</span>
                </div>
            </div>

            <div class="project">
                <div class="project-title">UCR Course Scheduling Assistant</div>
                <div class="project-desc">Python AI Agent using GPT-4 for autonomous course planning. MongoDB backend with RAG for 10,000+ course data. Serves 500+ students, saves 2+ hours per user.</div>
                <div class="badges">
                    <span class="badge">Python</span>
                    <span class="badge">GPT-4</span>
                    <span class="badge">MongoDB</span>
                    <span class="badge">RAG</span>
                    <span class="badge">FastAPI</span>
                </div>
            </div>

            <div class="project">
                <div class="project-title">R'Eats AI</div>
                <div class="project-desc">Restaurant recommendation engine with fine-tuned GPT-3.5 Turbo. Built Flask backend, curated 200 restaurants, trained on 1000+ instruction pairs.</div>
                <div class="badges">
                    <span class="badge">Flask</span>
                    <span class="badge">OpenAI API</span>
                    <span class="badge">Fine-tuning</span>
                    <span class="badge">Pandas</span>
                </div>
            </div>

            <div class="project">
                <div class="project-title">Fitness Tracker Mobile App</div>
                <div class="project-desc">Full-stack iOS app with AWS backend. GraphQL API, DynamoDB, Cognito security. 100+ automated tests, 25% engagement increase through geofencing.</div>
                <div class="badges">
                    <span class="badge">iOS</span>
                    <span class="badge">SwiftUI</span>
                    <span class="badge">AWS</span>
                    <span class="badge">GraphQL</span>
                    <span class="badge">CI/CD</span>
                </div>
            </div>
        </div>

        <!-- Education -->
        <div class="section">
            <div class="section-title">Education</div>

            <div class="edu-item">
                <div class="degree">B.S. Computer Science, Minor in Mathematics</div>
                <div class="school">University of California, Riverside</div>
                <div class="details">Expected Graduation: June 2027 | GPA: 3.95/4.0</div>
                <div class="highlights">
                    <strong>Honors:</strong> Dean's List • Chancellor's List • Tau Beta Pi (National Engineering Honor Society)
                </div>
            </div>
        </div>

        <!-- Skills Summary -->
        <div class="section">
            <div class="section-title">Skills & Technologies</div>

            <div class="skill-category">
                <span class="skill-name"><strong>Languages:</strong></span>
                <span class="skill-list">Python, Swift, JavaScript/TypeScript, Java, C++, SQL</span>
            </div>

            <div class="skill-category">
                <span class="skill-name"><strong>AI & ML:</strong></span>
                <span class="skill-list">OpenAI APIs, PyTorch, TensorFlow, RAG, LangChain, Prompt Engineering</span>
            </div>

            <div class="skill-category">
                <span class="skill-name"><strong>Frontend:</strong></span>
                <span class="skill-list">SwiftUI, React.js, Tailwind CSS, HTML/CSS</span>
            </div>

            <div class="skill-category">
                <span class="skill-name"><strong>Backend:</strong></span>
                <span class="skill-list">Flask, FastAPI, AWS (Lambda, EC2, S3), MongoDB, DynamoDB, Firebase</span>
            </div>

            <div class="skill-category">
                <span class="skill-name"><strong>DevOps:</strong></span>
                <span class="skill-list">Docker, CI/CD, Git, Linux, AWS Services</span>
            </div>
        </div>
    </div>
</body>
</html>
```

---

## How to Convert HTML to PDF

### IMPORTANT: Browser Steps (Required for Proper PDF)
Follow these steps EXACTLY to save as PDF (not HTML):

1. Save the template above as `resume-template.html`
2. Open in web browser (Chrome recommended):
   - Right-click file → Open with → Chrome (or Firefox/Safari)
3. Print to PDF:
   - Press `Cmd+P` (Mac) or `Ctrl+P` (Windows/Linux)
   - Change printer from "System Default" to **"Save as PDF"**
   - Click **"Save"** (NOT Print!)
4. Name the file: `resume.pdf`
5. **Important**: Save directly to folder: `public/resume.pdf`
   - Full path: `profile-spark-folio/public/resume.pdf`

### ⚠️ DO NOT:
- Just save the HTML file and rename to .pdf (won't work)
- Save from your text editor
- Use "Save Page As" from browser (saves HTML not PDF)

### Alternative: Use Online Tools
If print-to-PDF doesn't work:
- [HTML2PDF.com](https://html2pdf.com/) - Paste HTML, download as PDF
- [CloudConvert](https://cloudconvert.com/) - Upload HTML file
- [SmallPDF](https://smallpdf.com/html-to-pdf)

---

## File Location

Once you have your PDF ready, place it here:

```
profile-spark-folio/
├── public/
│   ├── resume.pdf          ← Your resume PDF goes here
│   ├── favicon.ico
│   ├── robots.txt
│   └── placeholder.svg
```

---

## Testing

After placing the PDF:

1. Run: `npm run build`
2. Test locally: `npm run preview`
3. Click "Download Resume" button in the header or hero section
4. Verify the PDF downloads correctly

---

## Resume Best Practices

✅ **Do:**
- Keep it to 1 page (fits on standard letter size)
- Use consistent formatting
- Match portfolio color scheme (#00c9ff cyan for headers)
- Include quantified metrics (500+ users, 92% accuracy, 25% improvement)
- Use bullet points for readability
- List most recent experience first

❌ **Don't:**
- Exceed 500KB file size
- Use complex graphics or images
- Include multiple colors (keep it professional)
- List skills without context
- Use fonts different from your portfolio

---

## Customization Tips

In the HTML template, you can easily customize:
- Your name, email, phone
- Job titles, companies, dates
- Project descriptions and metrics
- Skills and technologies
- Colors (change `#00c9ff` to match your brand)

Whenever you update your HTML resume template, just re-export to PDF and replace `public/resume.pdf`.

---

**Your portfolio is now ready to serve the resume. Once you place the PDF file, the download button will work automatically!**
