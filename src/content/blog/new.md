---

title: "Fix Python Not Recognized on Windows"
description: "Learn how to fix the 'Python is not recognized' error on Windows by checking your installation and PATH configuration."
pubDate: 2026-07-29
author: "Ahsan Habib"
category: "Windows"
tags: ["Windows", "Troubleshooting", "Python"]
heroImage: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80"
pinned: false
-------------

## 1. What Is the Problem?

Sometimes after installing Python on Windows, you may see an error like:

```text
'python' is not recognized as an internal or external command
```

This usually happens when Python is not correctly added to the Windows PATH environment variable.

## 2. Check If Python Is Installed

Open **Command Prompt** or **PowerShell** and run:

```bash
python --version
```

You can also try:

```bash
py --version
```

If Python is installed correctly, you should see a version number.

## 3. Find Your Python Installation

Python is commonly installed inside your user directory.

You can also search for **Python** from the Windows Start menu and locate its installation folder.

## 4. Add Python to PATH

If Python is installed but the `python` command does not work:

1. Search for **Environment Variables** in Windows.
2. Open **Edit the system environment variables**.
3. Click **Environment Variables**.
4. Select the **Path** variable.
5. Click **Edit**.
6. Add your Python installation directory.
7. Save the changes.

Restart Command Prompt or PowerShell afterward.

## 5. Test Python Again

Run:

```bash
python --version
```

Then test Python with:

```python
print("Python is working!")
```

If everything is configured correctly, you should see:

```text
Python is working!
```

## Conclusion

The **Python is not recognized** error is usually caused by an incorrect PATH configuration. Once Python and its required directories are properly added to PATH, you should be able to run Python commands normally from your terminal.
