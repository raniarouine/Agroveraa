FROM python:3.8.13-bullseye

# Définir le répertoire de travail
WORKDIR /

# Copier les fichiers du projetj
COPY . .

RUN pip install --upgrade pip

# Installer les dépendances
RUN pip install --no-cache-dir -r req.txt

# Exposer le port 8000
EXPOSE 8000

# Commande pour démarrer le serveur Django
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
