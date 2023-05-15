## crm_automation
`output.bat` is a script that appends a signature text to files and move them to a new location.

Files are initially in the `input` directory. A static signature is appended to the files, the files are renamed, and moved to `output` directory.

In `output` directory, a sub-directory is created with the present day's timestamp.

**NOTE:**
The paths to input and output directories should be edited.