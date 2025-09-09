#!/bin/bash

# Ask the user if they want to add, commit, and push changes
read -p "Do you want to publish changes? [Y/N]: " answer

if [[ "$answer" == "y" || "$answer" == "Y" ]]; then
  git add . > /dev/null 2>&1
  git commit -m "new script" > /dev/null 2>&1
  git push -u origin main > /dev/null 2>&1
  echo -e "\e[32mPublished Successfully 🎉\e[0m"
else
  echo -e "\e[31mOperation canceled 📍\e[0m"
  git status
fi