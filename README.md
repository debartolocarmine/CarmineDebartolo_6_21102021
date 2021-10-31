# Backend PIIQUANTE
Express Api server

## Backend and frontend
Ce projet contient deux dossiers. Un dossier backend et un dossier frontend.
Dans le dossier backend veuillez cloner ce projet, dans le dossier frontend veuillez cloner ce repo GitHub

### frontend
```bash
mkdir frontend && cd frontend
git clone https://github.com/OpenClassrooms-Student-Center/Web-Developer-P6.git .
npm install
npm start
```

### Backend
```bash
mkdir backend && cd backend
https://github.com/debartolocarmine/CarmineDebartolo_6_21102021.git .
```

#### Fichier .env
Avant de démarer veuilez faire une copie du fichier .env.default en le renommant .env .
Puis ouvrir ce nouveau fichier dans votre editeur de texte et renseigner les variables mongoose.
```bash
DB_NAME=<nom-db>
DB_USER=<nom-user-db>
DB_PWD=<password-db>
DB_HOST=<host-db>
ASK_TOKEN=ponzodfnzxueorcbYZ89356QSJDHPvbqdsouZ0S%psbhiqusugdvoqsgyfdivuqsg
```

#### Dependencies

```json
"dependencies": {
    "bcrypt": "^5.0.1",
    "body-parser": "^1.19.0",
    "cors": "^2.8.5",
    "crypto-js": "^4.1.1",
    "dotenv": "^10.0.0",
    "express": "^4.17.1",
    "helmet": "^4.6.0",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^6.0.8",
    "mongoose-unique-validator": "^3.0.0",
    "multer": "^1.4.3",
    "password-validator": "^5.1.1"
}
```

#### Run backend

Installez toutes les dépendances et démarez le server
```bash
npm install
nodemon server
```

