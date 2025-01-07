import express from 'express';
const app = express();
const puerto = 3000;
app.use(express.static('assets'));

const usersData = [
    { id: 1, name: 'Alice', age: 28, specialty: 'marketing' },
    { id: 2, name: 'Bob', age: 35, specialty: 'developers' },
    { id: 3, name: 'Charlie', age: 30, specialty: 'developers' },
    { id: 4, name: 'David', age: 25, specialty: 'QAs' },
    { id: 5, name: 'Emma', age: 32, specialty: 'ventas' },
    { id: 6, name: 'Frank', age: 28, specialty: 'marketing' },
    { id: 7, name: 'Grace', age: 34, specialty: 'developers' },
    { id: 8, name: 'Hank', age: 27, specialty: 'QAs' },
    { id: 9, name: 'Ivy', age: 31, specialty: 'ventas' },
    { id: 10, name: 'Jack', age: 29, specialty: 'marketing' },
    { id: 11, name: 'Karen', age: 36, specialty: 'developers' },
    { id: 12, name: 'Leo', age: 26, specialty: 'QAs' },
    { id: 13, name: 'Mia', age: 33, specialty: 'ventas' },
    { id: 14, name: 'Nathan', age: 30, specialty: 'marketing' },
    { id: 15, name: 'Olivia', age: 37, specialty: 'developers' },
    { id: 16, name: 'Paul', age: 24, specialty: 'QAs' },
    { id: 17, name: 'Quinn', age: 32, specialty: 'ventas' },
    { id: 18, name: 'Ryan', age: 28, specialty: 'marketing' },
    { id: 19, name: 'Sara', age: 35, specialty: 'developers' },
    { id: 20, name: 'Tom', age: 29, specialty: 'QAs' },
    { id: 21, name: 'Uma', age: 30, specialty: 'ventas' },
    { id: 22, name: 'Victor', age: 27, specialty: 'marketing' },
    { id: 23, name: 'Wendy', age: 34, specialty: 'developers' },
    { id: 24, name: 'Xander', age: 31, specialty: 'QAs' },
    { id: 25, name: 'Yara', age: 33, specialty: 'ventas' },
    { id: 26, name: 'Zack', age: 28, specialty: 'marketing' },
    { id: 27, name: 'Ava', age: 36, specialty: 'developers' },
    { id: 28, name: 'Bryan', age: 26, specialty: 'QAs' },
    { id: 29, name: 'Cynthia', age: 32, specialty: 'ventas' },
    { id: 30, name: 'Derek', age: 30, specialty: 'marketing' },
    ];

const marketingFiltrado = () => {
    return usersData.filter((usuario) => usuario.specialty.includes("marketing"))
}
marketingFiltrado()

const ventasFiltrado = () => {
    return usersData.filter((usuario) => usuario.specialty.includes("ventas"))
}
ventasFiltrado()

const qasFiltrado = () => {
    return usersData.filter((usuario) => usuario.specialty.includes("QAs"))
}
qasFiltrado()

const developersFiltrado = () => {
    return usersData.filter((usuario) => usuario.specialty.includes("developers"))
}
developersFiltrado()

app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Especialistas</title>
        <link rel="stylesheet" href="/styles.css">
    </head>
    <body>    
        <h1>Todos los Usuarios</h1>
        <nav>
        <a href="/marketing">Marketing</a>
        <a href="/ventas">Ventas</a>
        <a href="/qas">QAs</a>
        <a href="/developers">Developers</a>
        </nav>
    <body>
    </html>
    `
    );
});

app.get("/marketing", (req, res) => {
    const usuariosMaketing = marketingFiltrado();
    const marketUs = usuariosMaketing.map((usuario) => `<li>Número Id: ${usuario.id}, Nombre: ${usuario.name}, Edad: ${usuario.age}</li>`).join("");

    res.send(`
        <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Especialistas</title>
        <link rel="stylesheet" href="/styles.css">
    </head>
    <body>
        <h1>Especializados en Marketing</h1>
        <nav>
        <a href="/marketing">Marketing</a>
        <a href="/ventas">Ventas</a>
        <a href="/qas">QAs</a>
        <a href="/developers">Developers</a>
        </nav>
        <ul>${marketUs}</ul>
        <footer><a class="inicio" href="/">Inicio</a></footer>
    </body>
    </html>    
        `)
});

app.get("/ventas", (req, res) => {
    const usuariosVentas = ventasFiltrado();
    const ventasUs = usuariosVentas.map((usuario) => `<li>Número Id: ${usuario.id}, Nombre: ${usuario.name}, Edad: ${usuario.age}</li>`).join("");

    res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Especialistas</title>
        <link rel="stylesheet" href="/styles.css">
    </head>

    <body>
        <h1>Especializados en Ventas</h1>
        <nav>
        <a href="/marketing">Marketing</a>
        <a href="/ventas">Ventas</a>
        <a href="/qas">QAs</a>
        <a href="/developers">Developers</a>
        </nav>
        <ul>${ventasUs}</ul>
        <footer><a class="inicio" href="/">Inicio</a></footer>
    </body>
    </html> 
        `)
});

app.get("/qas", (req, res) => {
    const usuariosQas = qasFiltrado();
    const qasUs = usuariosQas.map((usuario) => `<li>Número Id: ${usuario.id}, Nombre: ${usuario.name}, Edad: ${usuario.age}</li>`).join("");

    res.send(`
        <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Especialistas</title>
        <link rel="stylesheet" href="/styles.css">
    </head>

    <body> 
        <h1>Especializados en QAs</h1>
        <nav>
        <a href="/marketing">Marketing</a>
        <a href="/ventas">Ventas</a>
        <a href="/qas">QAs</a>
        <a href="/developers">Developers</a>
        </nav>
        <ul>${qasUs}</ul>
        <footer><a class="inicio" href="/">Inicio</a></footer>
    </body>
    </html>    
        `)
});

app.get("/developers", (req, res) => {
    const usuariosDevelopers = developersFiltrado();
    const devUs = usuariosDevelopers.map((usuario) => `<li>Número Id: ${usuario.id}, Nombre: ${usuario.name}, Edad: ${usuario.age}</li>`).join("");

    res.send(`
        <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Especialistas</title>
        <link rel="stylesheet" href="/styles.css">
    </head>

    <body> 
        <h1>Especializados en Developing</h1>
        <nav>
        <a href="/marketing">Marketing</a>
        <a href="/ventas">Ventas</a>
        <a href="/qas">QAs</a>
        <a href="/developers">Developers</a>
        </nav>
        <ul>${devUs}</ul>
        <footer><a class="inicio" href="/">Inicio</a></footer>
    </body>
    </html>     
        `)
});

app.use((req, res) => {
    res.status(404).send(`<h1>404 - Página no Encontrada</h1>`);
    {/* <a href="/">Volver al Home</a> */}
});

const servidor = app.listen(puerto, () => {
    console.log(`Solicitud Exitosa del Servidor en el Puerto: ${servidor.address().port}`);
});
