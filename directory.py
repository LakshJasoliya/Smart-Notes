import os

def create_directory_structure(root_dir):
    # Create backend directory and subdirectories
    backend_dir = os.path.join(root_dir, 'backend')
    os.makedirs(backend_dir)
    os.makedirs(os.path.join(backend_dir, 'controllers'))
    os.makedirs(os.path.join(backend_dir, 'models'))
    os.makedirs(os.path.join(backend_dir, 'routes'))

    # Create frontend directory and subdirectories
    frontend_dir = os.path.join(root_dir, 'frontend')
    os.makedirs(frontend_dir)
    os.makedirs(os.path.join(frontend_dir, 'css'))
    os.makedirs(os.path.join(frontend_dir, 'js'))
    os.makedirs(os.path.join(frontend_dir, 'views', 'layout'))
    os.makedirs(os.path.join(frontend_dir, 'views', 'pages'))
    os.makedirs(os.path.join(frontend_dir, 'views', 'partials'))

    # Create other necessary directories
    os.makedirs(os.path.join(root_dir, 'public', 'assets', 'images'))
    os.makedirs(os.path.join(root_dir, 'public', 'assets', 'fonts'))

    # Create files
    with open(os.path.join(backend_dir, 'app.js'), 'w') as f:
        pass  # Placeholder for app.js file

    with open(os.path.join(backend_dir, 'config.js'), 'w') as f:
        pass  # Placeholder for config.js file

    with open(os.path.join(frontend_dir, 'css', 'styles.css'), 'w') as f:
        pass  # Placeholder for styles.css file

    with open(os.path.join(frontend_dir, 'js', 'script.js'), 'w') as f:
        pass  # Placeholder for script.js file

    # Optionally, you can create README.md and package.json files
    with open(os.path.join(root_dir, 'README.md'), 'w') as f:
        f.write('# Project Title\n\nProject description goes here.')

    with open(os.path.join(root_dir, 'package.json'), 'w') as f:
        f.write('{\n  "name": "project-name",\n  "version": "1.0.0",\n  "description": "Project description",\n  "main": "backend/app.js",\n  "scripts": {\n    "start": "node backend/app.js"\n  },\n  "author": "Your Name",\n  "license": "ISC"\n}')

# Call the function to create the directory structure
create_directory_structure('project-root')

'''
project-root/
│
├── backend/
│   ├── controllers/
│   │   ├── authController.js
│   │   └── otherControllers.js
│   │
│   ├── models/
│   │   ├── userModel.js
│   │   └── otherModels.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── otherRoutes.js
│   │
│   ├── app.js (or server.js)
│   └── config.js
│
├── frontend/
│   ├── css/
│   │   └── styles.css
│   │
│   ├── js/
│   │   └── script.js
│   │
│   └── views/
│       ├── layout/
│       │   ├── header.html
│       │   ├── footer.html
│       │   └── sidebar.html
│       │
│       ├── pages/
│       │   ├── home.html
│       │   ├── login.html
│       │   ├── signup.html
│       │   └── otherPages.html
│       │
│       └── partials/
│           ├── navbar.html
│           ├── carousel.html
│           └── otherComponents.html
│
├── node_modules/
│
├── public/
│   └── assets/
│       ├── images/
│       └── fonts/
│
├── package.json
└── README.md
'''