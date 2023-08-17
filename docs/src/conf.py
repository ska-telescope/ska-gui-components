
# -- Project information -----------------------------------------------------

project = 'ska-gui-components'
copyright = '2023, SKAO'
author = 'SKAO, (Trevor A Swain)'

# The short X.Y version
version = '0.1'
# The full version, including alpha/beta/rc tags
release = '0.1.53'

# -- General configuration ---------------------------------------------------

import sphinx_rtd_theme

def setup(app):
    app.add_css_file('css/custom.css')
    app.add_js_file('js/github.js')

extensions = [
    'sphinx.ext.autodoc',
    'sphinx.ext.doctest',
    'sphinx.ext.intersphinx',
    'sphinx.ext.todo',
    'sphinx.ext.coverage',
    'sphinx.ext.mathjax',
    'sphinx.ext.ifconfig',
    'sphinx.ext.viewcode',
    'sphinx.ext.githubpages',
]

templates_path = ['_templates']

source_suffix = '.rst'

master_doc = 'index'

exclude_patterns = []

pygments_style = 'sphinx'

# -- Options for HTML output -------------------------------------------------

html_theme = 'ska_ser_sphinx_theme'

html_context = {
    'logo': 'img/logo.jpg',
    'theme_logo_only' : True,
    'display_github': True, # Integrate GitHub
    'github_user': 'ska-telescope', # Username
    'github_repo': 'ska-gui-components', # Repo name
    'github_version': 'master', # Version
    'conf_py_path': '/src/', # Path in the checkout to the docs root
}

html_static_path = ['_static']

# -- Options for HTMLHelp output ---------------------------------------------

htmlhelp_basename = 'ska-gui-components'

# -- Options for LaTeX output ------------------------------------------------

latex_elements = {
}

latex_documents = [
    (master_doc, 'ska-gui-components.tex', 'ska-gui-components Documentation',
     'SKAO , (Trevor A Swain)', 'manual'),
]

# -- Options for manual page output ------------------------------------------

man_pages = [
    (master_doc, 'ska-gui-components', 'ska-gui-components Documentation',
     [author], 1)
]

# -- Options for Texinfo output ----------------------------------------------

texinfo_documents = [
    (master_doc, 'ska-gui-components', 'ska-gui-components Documentation',
     author, 'ska-gui-components', 'A Library of SKA custom components',
     'Miscellaneous'),
]

# -- Options for Epub output -------------------------------------------------

epub_title = project

epub_exclude_files = ['search.html']

# -- Extension configuration -------------------------------------------------

# -- Options for intersphinx extension ---------------------------------------

intersphinx_mapping = {'https://docs.python.org/': None}

# -- Options for todo extension ----------------------------------------------

todo_include_todos = True