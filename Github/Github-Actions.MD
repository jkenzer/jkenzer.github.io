# Creating Github Actions

It's basically as easy as setting up the workflow yaml file and either pointing to a repo that has the action or pointing to a script in your repo with the code.

```yaml
name: Generate README

on:
  push:
    branches: [ master ]

jobs:
  build:

    runs-on: ubuntu-latest
    strategy:
      matrix:
        python-version: [3.7]

    steps:
    - uses: actions/checkout@v2
    - name: Set up Python ${{ matrix.python-version }}
      uses: actions/setup-python@v1
      with:
        python-version: ${{ matrix.python-version }}
    - name: Update README.md
      run: |
        python update.py
    - name: Push the change
      run: |
          git config --global user.name 'Josh Kenzer'
          git config --global user.email 'jkenzer@gmail.com'
          git commit -am "Automated update of README.md" || true
          git push
```
The run block points to update.py which is in my Repo's root directory.