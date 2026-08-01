import os, glob

for filepath in glob.glob("*.html"):
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    
    content = content.replace(' class="nav-link is-active"', ' class="nav-link"')
    content = content.replace('ÖzServer', 'MyServerTutorialAz')
    content = content.replace('OzServer', 'MyServerTutorialAz')
    content = content.replace('      <a href="https://discord.gg/" target="_blank" rel="noopener">Discord</a>\n', '')
    
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)
