#!/usr/bin/env python

import os


HEADER = """# TIL
> Today I Learned: A collection of things I learned going about life.

"""

FOOTER = """# About Josh Kenzer
* [About Page](about)
* [My Job](https://www.azfoundation.org/)
* [Salesforce Trailhead](https://trailblazer.me/id/jkenzer)
* [Fledgling Sketchbook](sketchbook)
"""


def main():
    content = ""
    content += HEADER

    for root, dirs, files in os.walk("."):
        dirs.sort()
        if root == '.':
            for dir in ('.git', '.github', 'css', 'about', '_layouts'):
                try:
                    dirs.remove(dir)
                except ValueError:
                    pass
            continue

        category = os.path.basename(root)

        content += "### {}\n\n".format(category)

        for file in files:
            ext = os.path.basename(file).split('.')[1]
            if ext.lower() == 'md':
                name = os.path.basename(file).split('.')[0]
                name = " ".join(word.capitalize() for word in name.split('-'))
                content += "- [{}]({})\n".format(name,
                                                 os.path.join(category, file))
        content += "\n"

    with open("README.md", "w") as fd:
        content += FOOTER
        fd.write(content)


if __name__ == "__main__":
    main()
