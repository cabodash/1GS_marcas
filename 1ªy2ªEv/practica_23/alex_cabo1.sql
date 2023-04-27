CREATE DATABASE alex_cabo1;

USE alex_cabo1;

CREATE TABLE ALUMNOS (
    DNI VARCHAR(9) PRIMARY KEY,
    NombreCompleto VARCHAR(40) NOT NULL,
    Telefono VARCHAR(20)
);

CREATE TABLE ASIGNATURAS (
    Nombre VARCHAR(40) PRIMARY KEY,
    Horas DECIMAL(4,1) NOT NULL,
    Nivel VARCHAR(10)
);

CREATE TABLE MATRICULAS (
    DNIAlumno VARCHAR(9),
    NombreAsignatura VARCHAR(40),
    FechaMatricula DATE,
    PRIMARY KEY (DNIAlumno, NombreAsignatura),
    FOREIGN KEY (DNIAlumno) REFERENCES ALUMNOS(DNI),
    FOREIGN KEY (NombreAsignatura) REFERENCES ASIGNATURAS(Nombre)
);

INSERT INTO ALUMNOS (DNI, NombreCompleto, Telefono) VALUES
('123456789', 'Juan Pérez', '123456789'),
('234567890', 'María González', '234567890'),
('345678901', 'Pedro Rodríguez', '345678901');

INSERT INTO ASIGNATURAS (Nombre, Horas, Nivel) VALUES
('Matemáticas', 4.5, 'Básico'),
('Física', 3.0, 'Medio'),
('Química', 3.5, 'Medio');

INSERT INTO MATRICULAS (DNIAlumno, NombreAsignatura, FechaMatricula) VALUES
('123456789', 'Matemáticas', '2022-02-01'),
('234567890', 'Física', '2022-02-03'),
('345678901', 'Química', '2022-02-05');