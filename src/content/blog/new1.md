---

title: "How to Fix Common Python Problems on Windows 11"
description: "A complete troubleshooting guide for fixing Python installation, PATH, pip, virtual environment, permission, and package installation problems on Windows 11."
pubDate: 2026-07-29
author: "Ahsan Habib"
category: "Windows"
tags: ["Windows", "Python", "Troubleshooting", "Programming", "Pip"]
heroImage: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80"
pinned: false
-------------

Python is one of the most popular programming languages for beginners, developers, automation engineers, data scientists, and cybersecurity professionals.

However, when using Python on Windows 11, you may encounter problems such as:

* `python is not recognized`
* `pip is not recognized`
* Python opening the Microsoft Store
* Package installation failures
* Permission errors
* Virtual environment activation problems
* Multiple Python versions conflicting
* Modules not being found after installation

In this guide, we will go through the most common Python problems on Windows 11 and learn how to fix them.

---

## 1. Check Whether Python Is Installed

Before troubleshooting anything else, confirm that Python is actually installed.

Open **Command Prompt** or **PowerShell**.

Run:

```bash
python --version
```

You can also try:

```bash
py --version
```

If Python is installed correctly, you should receive output similar to:

```text
Python 3.x.x
```

The exact version depends on the version installed on your computer.

If neither command works, Python may not be installed correctly.

---

## 2. Fix "Python Is Not Recognized"

One of the most common Windows errors is:

```text
'python' is not recognized as an internal or external command,
operable program or batch file.
```

This normally means Windows cannot find the Python executable through its PATH configuration.

### Find Python

Try:

```bash
where python
```

You can also run:

```bash
where py
```

If Windows finds Python, it will display the location of the executable.

For example:

```text
C:\Users\YourName\AppData\Local\Programs\Python\Python3xx\python.exe
```

Your actual location may be different.

---

## 3. Add Python to Windows PATH

If Python is installed but the `python` command doesn't work, you may need to add it to PATH.

Search Windows for:

```text
Edit the system environment variables
```

Open it and select:

**Environment Variables**

Under your user variables, find:

```text
Path
```

Click:

**Edit**

You may need to add the Python installation directory and its `Scripts` directory.

For example:

```text
C:\Users\YourName\AppData\Local\Programs\Python\Python3xx\
```

and:

```text
C:\Users\YourName\AppData\Local\Programs\Python\Python3xx\Scripts\
```

Replace the example paths with the actual Python installation paths on your computer.

Save the changes.

Close your existing terminal and open a new Command Prompt or PowerShell window.

Test again:

```bash
python --version
```

---

## 4. Python Opens Microsoft Store Instead

Another strange Windows problem occurs when you type:

```bash
python
```

and Windows opens the Microsoft Store.

This can happen because Windows has application execution aliases configured for Python.

Open:

**Settings → Apps → Advanced app settings → App execution aliases**

Look for Python-related aliases.

Depending on your installation, you may need to disable conflicting aliases such as:

```text
python.exe
python3.exe
```

After changing the settings, restart your terminal.

Then run:

```bash
python --version
```

---

## 5. Check Whether pip Is Installed

`pip` is Python's package installer.

Check it using:

```bash
pip --version
```

A more reliable method is:

```bash
python -m pip --version
```

If you use the Python launcher, you can also try:

```bash
py -m pip --version
```

If pip is installed, Windows should display information about the installed version.

---

## 6. Fix "pip Is Not Recognized"

You may encounter:

```text
'pip' is not recognized as an internal or external command
```

First try:

```bash
python -m pip --version
```

If that works, pip exists but its executable may not be available directly through PATH.

You can continue installing packages with:

```bash
python -m pip install package-name
```

For example:

```bash
python -m pip install requests
```

This approach also helps ensure that pip belongs to the Python interpreter you are currently using.

---

## 7. Repair pip

Python includes a module called `ensurepip` that can help install or repair pip.

Run:

```bash
python -m ensurepip --upgrade
```

Then check:

```bash
python -m pip --version
```

You can also update pip:

```bash
python -m pip install --upgrade pip
```

---

## 8. Install Your First Python Package

Let's install the popular `requests` package.

Run:

```bash
python -m pip install requests
```

After installation, open Python:

```bash
python
```

Then try:

```python
import requests

print(requests.__version__)
```

If no import error appears, the package is available to that Python environment.

---

## 9. Fix "No Module Named ..."

A common Python error looks like:

```text
ModuleNotFoundError: No module named 'requests'
```

This means the Python interpreter running your program cannot find the requested package.

Install the package using:

```bash
python -m pip install requests
```

Then check:

```bash
python -m pip show requests
```

This should display information about the package and its installation location.

---

## 10. Why a Package Can Be Installed but Still Not Work

Sometimes you install a package successfully but Python still says:

```text
ModuleNotFoundError
```

One possible reason is that you have multiple Python installations.

For example, you might have one interpreter associated with:

```text
python
```

while another is being used by your IDE.

Check the command-line interpreter:

```bash
python -c "import sys; print(sys.executable)"
```

Then check where pip belongs:

```bash
python -m pip --version
```

This helps determine whether your Python interpreter and package installation are using the same environment.

---

## 11. Check Installed Python Versions

The Python launcher can help you inspect installed versions.

Try:

```bash
py --list
```

You may see multiple Python installations.

For example:

```text
-V:3.x
-V:3.y
```

If you intentionally have multiple versions, you can select a particular version with the Python launcher.

For example:

```bash
py -3.x --version
```

Replace `3.x` with an installed version.

---

## 12. Check the Current Python Executable

Python can tell you exactly which executable is running.

Use:

```bash
python -c "import sys; print(sys.executable)"
```

You can also inspect the Python version:

```bash
python -c "import sys; print(sys.version)"
```

These commands are extremely useful when troubleshooting multiple installations.

---

## 13. Create a Virtual Environment

Virtual environments are recommended for Python projects because they keep project dependencies separated.

Navigate to your project:

```bash
cd path\to\your\project
```

Create an environment:

```bash
python -m venv .venv
```

This creates a directory named:

```text
.venv
```

---

## 14. Activate the Virtual Environment

### Command Prompt

Run:

```bat
.venv\Scripts\activate
```

### PowerShell

Run:

```powershell
.\.venv\Scripts\Activate.ps1
```

After activation, your terminal prompt will usually show the environment name.

For example:

```text
(.venv)
```

Now packages installed with pip will normally be installed inside this virtual environment.

---

## 15. PowerShell Blocks Virtual Environment Activation

PowerShell may display an error indicating that script execution is disabled.

Before changing execution-policy settings, check the current configuration:

```powershell
Get-ExecutionPolicy -List
```

For a temporary change affecting only the current PowerShell process, you can use:

```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
```

Then try activating the environment again:

```powershell
.\.venv\Scripts\Activate.ps1
```

Because `Process` scope applies only to the current PowerShell session, closing that session removes the temporary setting.

---

## 16. Deactivate a Virtual Environment

When you finish working inside the environment, run:

```bash
deactivate
```

Your terminal will return to its normal environment.

---

## 17. Install Packages Inside a Virtual Environment

After activating `.venv`, install your required packages.

For example:

```bash
python -m pip install requests
```

You can install multiple packages:

```bash
python -m pip install requests flask
```

Check installed packages:

```bash
python -m pip list
```

---

## 18. Create requirements.txt

A Python project often stores its dependencies inside a file called:

```text
requirements.txt
```

Generate one with:

```bash
python -m pip freeze > requirements.txt
```

The file may contain entries similar to:

```text
Flask==x.x.x
requests==x.x.x
```

The exact versions will depend on what you installed.

---

## 19. Install Packages From requirements.txt

If you download or clone an existing Python project, it may already contain:

```text
requirements.txt
```

Create and activate a virtual environment first, then run:

```bash
python -m pip install -r requirements.txt
```

pip will attempt to install the dependencies listed in the file.

---

## 20. Upgrade an Installed Package

To upgrade a package, use:

```bash
python -m pip install --upgrade requests
```

To upgrade pip itself:

```bash
python -m pip install --upgrade pip
```

---

## 21. Uninstall a Python Package

To remove a package:

```bash
python -m pip uninstall requests
```

pip will ask for confirmation before removing it.

Check your installed packages afterward:

```bash
python -m pip list
```

---

## 22. Find Information About a Package

Use:

```bash
python -m pip show requests
```

This can display information such as:

* Package name
* Version
* Installation location
* Dependencies

It is particularly useful when debugging package conflicts.

---

## 23. Fix Permission Errors

Sometimes pip may fail because your account does not have permission to write to a particular installation directory.

For personal scripts outside a virtual environment, one option is:

```bash
python -m pip install --user package-name
```

For example:

```bash
python -m pip install --user requests
```

However, for development projects, using a virtual environment is usually cleaner.

---

## 24. Avoid Running Everything as Administrator

Running Command Prompt or PowerShell as Administrator can sometimes appear to solve permission problems, but it should not be the default solution.

Instead, first determine:

* Which Python installation you are using
* Which pip installation you are using
* Whether a virtual environment is active
* Where the package is being installed

Check Python:

```bash
python -c "import sys; print(sys.executable)"
```

Check pip:

```bash
python -m pip --version
```

This often reveals the actual source of the problem.

---

## 25. Fix Python Problems in VS Code

Sometimes Python works in Command Prompt but fails inside Visual Studio Code.

A common reason is that VS Code is using a different Python interpreter.

Open the Command Palette:

```text
Ctrl + Shift + P
```

Search for:

```text
Python: Select Interpreter
```

Select the interpreter belonging to your project.

If you created:

```text
.venv
```

choose the Python interpreter inside that environment.

After selecting it, open a new terminal in VS Code.

Test:

```bash
python --version
```

Then:

```bash
python -m pip list
```

---

## 26. Test Python With a Simple Program

Create:

```text
hello.py
```

Add:

```python
print("Hello World!")
print("Python is working correctly.")
```

Run:

```bash
python hello.py
```

You should see:

```text
Hello World!
Python is working correctly.
```

---

## 27. Test Package Imports

Create:

```text
test_requests.py
```

Add:

```python
import requests

print("Requests imported successfully!")
print("Version:", requests.__version__)
```

Run:

```bash
python test_requests.py
```

If the program runs successfully, your interpreter can find the package.

---

## 28. Check Environment Information

When troubleshooting Python, collecting environment information can save a lot of time.

Run:

```bash
python --version
```

Then:

```bash
python -m pip --version
```

Then:

```bash
where python
```

And:

```bash
where pip
```

Finally:

```bash
python -c "import sys; print(sys.executable)"
```

These commands tell you which Python and pip installations Windows is actually using.

---

## 29. A Clean Python Project Structure

A simple project might look like:

```text
my-python-project/
│
├── .venv/
├── src/
│   └── main.py
│
├── .gitignore
├── README.md
└── requirements.txt
```

Your `main.py` could contain:

```python
def main():
    print("My Python application is running!")


if __name__ == "__main__":
    main()
```

Run it with:

```bash
python src\main.py
```

---

## 30. Add the Virtual Environment to .gitignore

If you use Git, you generally should not commit the entire virtual environment.

Create:

```text
.gitignore
```

Add:

```gitignore
.venv/
__pycache__/
*.pyc
```

Dependencies can instead be documented through files such as:

```text
requirements.txt
```

---

## 31. Useful Python Troubleshooting Commands

Here are some commands worth remembering:

```bash
python --version
```

Check the Python version.

```bash
py --list
```

List Python versions known to the Python launcher.

```bash
where python
```

Find Python executables available through PATH.

```bash
python -m pip --version
```

Check pip.

```bash
python -m pip list
```

List installed packages.

```bash
python -m pip show package-name
```

Inspect an installed package.

```bash
python -m pip install package-name
```

Install a package.

```bash
python -m pip uninstall package-name
```

Remove a package.

```bash
python -m pip install --upgrade package-name
```

Upgrade a package.

```bash
python -c "import sys; print(sys.executable)"
```

Find the active Python executable.

---

## 32. Recommended Troubleshooting Order

When Python stops working, don't immediately reinstall everything.

Use this order:

1. Check `python --version`.
2. Check `py --version`.
3. Run `where python`.
4. Check `python -m pip --version`.
5. Check `python -c "import sys; print(sys.executable)"`.
6. Verify your PATH.
7. Check whether a virtual environment is active.
8. Check your IDE's selected interpreter.
9. Reinstall or repair Python only if necessary.

This makes it easier to identify the real problem instead of changing several things at once.

---

## 33. Example: Complete Project Setup

Let's create a new Python project from scratch.

Create a directory:

```bash
mkdir python-demo
```

Enter it:

```bash
cd python-demo
```

Create a virtual environment:

```bash
python -m venv .venv
```

Activate it in Command Prompt:

```bat
.venv\Scripts\activate
```

Install a package:

```bash
python -m pip install requests
```

Create:

```text
main.py
```

Add:

```python
import requests


def main():
    print("Python environment is ready!")
    print("Requests version:", requests.__version__)


if __name__ == "__main__":
    main()
```

Run:

```bash
python main.py
```

Finally, save the dependencies:

```bash
python -m pip freeze > requirements.txt
```

You now have a basic isolated Python project.

---

## 34. Final Checklist

If Python is still not working, check the following:

* Python is installed.
* `python --version` works.
* `py --version` works if the launcher is installed.
* Python's installation directory is correctly configured.
* `python -m pip --version` works.
* Your IDE uses the correct interpreter.
* Your virtual environment is activated.
* Packages are installed into the same environment running your code.
* Your terminal was restarted after PATH changes.
* Multiple Python installations are not causing conflicts.

---

## Conclusion

Python problems on Windows 11 are often caused by environment configuration rather than Python code itself.

The most important commands to remember are:

```bash
python --version
python -m pip --version
where python
python -c "import sys; print(sys.executable)"
```

These commands can quickly tell you which Python installation is active and where your packages are being installed.

For individual projects, using a virtual environment is one of the best ways to avoid dependency conflicts:

```bash
python -m venv .venv
```

Then activate the environment and install your project dependencies inside it.

Once you understand **Python installations, PATH, pip, interpreters, and virtual environments**, troubleshooting Python on Windows becomes much easier.
