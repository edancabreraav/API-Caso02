## Datos para la creación del grafo

**NOTA: Copiar y pegar ambos códigos en el orden en que se muestran**

```bash
CREATE
	(a1:Aeropuerto {id_aeropuerto:11111, nombre:"Aeropuerto Internacional Benito Juárez", ciudad:"Ciudad de México, CDMX", direccion:"Av. Capitán Carlos León S/N, Peñón de los Baños, Venustiano Carranza, 15620 Ciudad de México, CDMX", numero_de_pistas:2}),
	(a2:Aeropuerto {id_aeropuerto:22222, nombre:"Aeropuerto Internacional Miguel Hidalgo y Costilla", ciudad:"Guadalajara, Jalisco", direccion:"Carr. Guadalajara - Chapala Km 17.5, 45659 Jal.", numero_de_pistas:2}),
	(a3:Aeropuerto {id_aeropuerto:33333, nombre:"Aeropuerto Internacional General Mariano Escobedo", ciudad:"Monterrey, Nuevo León", direccion:"Carr. Miguel Alemán Km 24, 66600 Cdad. Apodaca, N.L.", numero_de_pistas:2}),
	(a4:Aeropuerto {id_aeropuerto:44444, nombre:"Los Angeles International Airport", ciudad:"Los Ángeles, California", direccion:"1 World Way, Los Angeles, CA 90045, Estados Unidos", numero_de_pistas:4}),
	(a5:Aeropuerto {id_aeropuerto:55555, nombre:"Wilcox Field", ciudad:"Miami, Florida", direccion:"2100 NW 42nd Ave, Miami, FL 33142, EE. UU.", numero_de_pistas:4}),
	(a6:Aeropuerto {id_aeropuerto:66666, nombre:"Ronald Reagan Washington National Airport", ciudad:"Arlington, Virginia", direccion:"2401 Ronald Reagan Washington National Airport Access Rd, Arlington, VA 22202, Estados Unidos", numero_de_pistas:3}),
	(a7:Aeropuerto {id_aeropuerto:77777, nombre:"Toronto Pearson National Airport",ciudad:"Mississauga, Ontario", direccion:"6301 Silver Dart Dr, Mississauga, ON L5P 1B2, Canadá", numero_de_pistas:5}),
	(a8:Aeropuerto {id_aeropuerto:88888, nombre:"Flughafen Frankfurt am Main",ciudad:"Fráncfort del Meno, Hesse", direccion:"60547 Frankfurt, Alemania", numero_de_pistas:4}),
	(a9:Aeropuerto {id_aeropuerto:99999, nombre:"Kingsford Smith International Airport",ciudad:"Mascot, Sidney, Australia", direccion:"Mascot NSW 2020, Australia", numero_de_pistas:5})
CREATE
	(en1:Empresa&Nacional {rfc:"RFCNAC11111", nombre:"Aeromexico", nacionalidad:"Mexicana", direccion_sede:"Terminal 2 del Aeropuerto Internacional de la Ciudad de México", telefonos:["+52 (55) 5133 4000", "02 8644 1883"], numero_aviones:113, pais_perteneciente: "Mexico", permiso_internacional:"sí"}),
	(en2:Empresa&Nacional {rfc:"RFCNAC22222", nombre:"Viva Aerobus", nacionalidad:"Mexicana", direccion_sede:"24 SN, C.P. 66600, Apodaca, Nuevo León", telefonos:["81 8215 0150", "55 43 57 84 82"], numero_aviones:170, pais_perteneciente: "Mexico", permiso_internacional:"sí"}),
	(en3:Empresa&Nacional {rfc:"RFCNAC33333", nombre:"Volaris", nacionalidad:"Mexicana", direccion_sede:"Antonio Dovalí Jaime No. 70, Torre B, Piso 13, Col. Zedec Santa Fe, C.P. 01210, Ciudad de México", telefonos:["+52 (55) 1102 8000", "55 5898 8599"], numero_aviones:134, pais_perteneciente: "Mexico", permiso_internacional:"no"})
CREATE
	(ei1:Empresa&Internacional {rfc:"RFCINT11111", nombre:"Air Canada", nacionalidad:"Canadiense", direccion_sede:"7373 Boul de la Côte-Vertu, Montreal ", telefonos:["00 1 514-393-3333", "55 9138 0280"], numero_aviones:200, paises_no_puede_operar:["Armenia", "Azerbayan", "Niue"]}),
	(ei2:Empresa&Internacional {rfc:"RFCINT22222", nombre:"American Airlines", nacionalidad:"Estadounidense", direccion_sede:"Fort Worth, Texas", telefonos:["+52-557-005-0109 ", " +1-844-645-3880"], numero_aviones:965, paises_no_puede_operar:["Barbados", "Palestina", "Polonia"]}),
	(ei3:Empresa&Internacional {rfc:"RFCINT33333", nombre:"Delta Airlines", nacionalidad:"Estadounidense", direccion_sede:"Atlanta, Georgia", telefonos:["+𝟭-𝟴𝟰𝟰-𝟮𝟯𝟭-𝟱𝟴𝟵𝟱", " +𝟱𝟮 (𝟱𝟱) 𝟲𝟵𝟱𝟮-𝟭𝟳𝟳𝟰"], numero_aviones:990, paises_no_puede_operar:["Ruanda", "Abjasia", "Chipre"]})
CREATE
	(ec1:Empresa&Continental {rfc:"RFCCON11111", nombre:"Lufthansa Group", nacionalidad:"Alemana", direccion_sede:"Venloer Strasse 151-153, 50672 Colonia, Renania del Norte-Westfalia, Alemania", telefonos:["+1(877) 559-0182"], numero_aviones:721, continente_perteneciente: "Europa", paises_sobre_los_que_opera:["Mexico", "Estados Unidos", "Canada", "Alemania", "Australia"]}),
	(ec2:Empresa&Continental {rfc:"RFCCON22222", nombre:"Air Hamburg", nacionalidad:"Alemana", direccion_sede:"Leverkusenstrasse 54, Hamburg, Alemania", telefonos:["+1-833-853-8872"], numero_aviones:44, continente_perteneciente: "Europa", paises_sobre_los_que_opera:["Mexico", "Estados Unidos", "Canada", "Alemania", "Australia"]}),
	(ec3:Empresa&Continental {rfc:"RFCCON33333", nombre:"Jetstar Airways", nacionalidad:"Australiana", direccion_sede:"PO Box 4713, Melbourne, VIC 3001, Australia", telefonos:["+00 61 3 9645 5999"], numero_aviones:44, continente_perteneciente: "Oceania", paises_sobre_los_que_opera:["Mexico", "Estados Unidos", "Canada", "Alemania", "Australia"]})
CREATE 
	(av1:Avion {id_avion:"787-9D", modelo:"787-9 Dreamliner", millas_autonomia:7635, numero_pasajeros:250, numero_integrantes_tripulacion:7, utlima_revision:date("2019-09-30")}),
	(av2:Avion {id_avion:"787-8D", modelo:"787-8 Dreamliner", millas_autonomia:8463, numero_pasajeros:217, numero_integrantes_tripulacion:6, utlima_revision:date("2020-01-28")}),
	(av3:Avion {id_avion:"737-BM", modelo:"Boeing 737 MAX", millas_autonomia:3500, numero_pasajeros:220, numero_integrantes_tripulacion:6, utlima_revision:date("2018-07-06")})
WITH av1, av2, av3
MATCH (en1:Nacional) WHERE en1.rfc="RFCNAC11111"
CREATE
	(en1)-[:PROPIEDAD]->(av1),
	(en1)-[:PROPIEDAD]->(av2),
	(en1)-[:PROPIEDAD]->(av3)
CREATE 
	(av4:Avion {id_avion:"A320", modelo:"Airbus A320", millas_autonomia:3294, numero_pasajeros:140, numero_integrantes_tripulacion:5, utlima_revision:date("2024-10-20")}),
	(av5:Avion {id_avion:"737-33A", modelo:"Boeing 737-33A", millas_autonomia:1400, numero_pasajeros:128, numero_integrantes_tripulacion:5, utlima_revision:date("2023-04-21")}),
	(av6:Avion {id_avion:"A321-271NX", modelo:"Airbus A321-271NX", millas_autonomia:2600, numero_pasajeros:186, numero_integrantes_tripulacion:6, utlima_revision:date("2022-09-14")})
WITH av4, av5, av6
MATCH (en2:Nacional) WHERE en2.rfc="RFCNAC22222"
CREATE
	(en2)-[:PROPIEDAD]->(av4),
	(en2)-[:PROPIEDAD]->(av5),
	(en2)-[:PROPIEDAD]->(av6)
CREATE 
	(av7:Avion {id_avion:"A319", modelo:"Airbus A319", millas_autonomia:3726, numero_pasajeros:142, numero_integrantes_tripulacion:5, utlima_revision:date("2021-11-08")}),
	(av8:Avion {id_avion:"A320N", modelo:"Airbus A320 NEO", millas_autonomia:3200, numero_pasajeros:186, numero_integrantes_tripulacion:6, utlima_revision:date("2024-06-24")}),
	(av9:Avion {id_avion:"A321N", modelo:"Airbus A321 NEO", millas_autonomia:4026, numero_pasajeros:237, numero_integrantes_tripulacion:8, utlima_revision:date("2022-01-14")})
WITH av7, av8, av9
MATCH (en3:Nacional) WHERE en3.rfc="RFCNAC33333"
CREATE
	(en3)-[:PROPIEDAD]->(av7),
	(en3)-[:PROPIEDAD]->(av8),
	(en3)-[:PROPIEDAD]->(av9)
CREATE 
	(av10:Avion {id_avion:"77W", modelo:"Boeing 777-300ER (77W)", millas_autonomia:9380, numero_pasajeros:212, numero_integrantes_tripulacion:6, utlima_revision:date("2023-09-09")}),
	(av11:Avion {id_avion:"333", modelo:"Airbus A330-300 (333)", millas_autonomia:7400, numero_pasajeros:292, numero_integrantes_tripulacion:7, utlima_revision:date("2020-11-11")}),
	(av12:Avion {id_avion:"E75", modelo:"Embraer E175 (E75)", millas_autonomia:2429, numero_pasajeros:88, numero_integrantes_tripulacion:3, utlima_revision:date("2021-10-27")})
WITH av10, av11, av12
MATCH (ei1:Internacional) WHERE ei1.rfc="RFCINT11111"
CREATE
	(ei1)-[:PROPIEDAD]->(av10),
	(ei1)-[:PROPIEDAD]->(av11),
	(ei1)-[:PROPIEDAD]->(av12)
CREATE 
	(av13:Avion {id_avion:"7200LR", modelo:"Boeing 777-200LR", millas_autonomia:9844, numero_pasajeros:319, numero_integrantes_tripulacion:9, utlima_revision:date("2024-10-27")}),
	(av14:Avion {id_avion:"747-SP", modelo:"Boeing 747-SP", millas_autonomia:6655, numero_pasajeros:331, numero_integrantes_tripulacion:10, utlima_revision:date("2024-09-01")}),
	(av15:Avion {id_avion:"757-200", modelo:"Boeing 757-200", millas_autonomia:3900, numero_pasajeros:200, numero_integrantes_tripulacion:7, utlima_revision:date("2024-03-07")})
WITH av13, av14, av15
MATCH (ei2:Internacional) WHERE ei2.rfc="RFCINT22222"
CREATE
	(ei2)-[:PROPIEDAD]->(av13),
	(ei2)-[:PROPIEDAD]->(av14),
	(ei2)-[:PROPIEDAD]->(av15)
CREATE 
	(av16:Avion {id_avion:"A220-100", modelo:"Airbus A220-100", millas_autonomia:5650, numero_pasajeros:150, numero_integrantes_tripulacion:5, utlima_revision:date("2022-07-20")}),
	(av17:Avion {id_avion:"A737-900ER", modelo:"Boeing 737-900ER", millas_autonomia:2870, numero_pasajeros:212, numero_integrantes_tripulacion:7, utlima_revision:date("2021-11-05")}),
	(av18:Avion {id_avion:"A350-1000", modelo:"Airbus A350-1000", millas_autonomia:10004, numero_pasajeros:334, numero_integrantes_tripulacion:9, utlima_revision:date("2024-09-21")})
WITH av16, av17, av18
MATCH (ei3:Internacional) WHERE ei3.rfc="RFCINT33333"
CREATE
	(ei3)-[:PROPIEDAD]->(av16),
	(ei3)-[:PROPIEDAD]->(av17),
	(ei3)-[:PROPIEDAD]->(av18)
CREATE 
	(av19:Avion {id_avion:"A340-300", modelo:"Airbus A340-300", millas_autonomia:8512, numero_pasajeros:275, numero_integrantes_tripulacion:7, utlima_revision:date("2021-12-24")}),
	(av20:Avion {id_avion:"747-8", modelo:"Boeing 747-8", millas_autonomia:9320, numero_pasajeros:550, numero_integrantes_tripulacion:13, utlima_revision:date("2024-08-17")}),
	(av21:Avion {id_avion:"A340-600", modelo:"Airbus A340-600", millas_autonomia:9072, numero_pasajeros:475, numero_integrantes_tripulacion:11, utlima_revision:date("2024-08-23")})
WITH av19, av20, av21
MATCH (ec1:Continental) WHERE ec1.rfc="RFCCON11111"
CREATE
	(ec1)-[:PROPIEDAD]->(av19),
	(ec1)-[:PROPIEDAD]->(av20),
	(ec1)-[:PROPIEDAD]->(av21)
CREATE 
	(av22:Avion {id_avion:"7X", modelo:"Dassault Falcon 7X", millas_autonomia:5846, numero_pasajeros:12, numero_integrantes_tripulacion:3, utlima_revision:date("2024-04-25")}),
	(av23:Avion {id_avion:"EL500", modelo:"Embraer Legacy 500", millas_autonomia:3598, numero_pasajeros:12, numero_integrantes_tripulacion:3, utlima_revision:date("2024-04-26")}),
	(av24:Avion {id_avion:"EP600", modelo:"Embraer Praetor 600", millas_autonomia:3598, numero_pasajeros:12, numero_integrantes_tripulacion:3, utlima_revision:date("2024-04-27")})
WITH av22, av23, av24
MATCH (ec2:Continental) WHERE ec2.rfc="RFCCON22222"
CREATE
	(ec2)-[:PROPIEDAD]->(av22),
	(ec2)-[:PROPIEDAD]->(av23),
	(ec2)-[:PROPIEDAD]->(av24)
CREATE 
	(av25:Avion {id_avion:"AA320", modelo:"Airbus A320-232", millas_autonomia:3300, numero_pasajeros:240, numero_integrantes_tripulacion:7, utlima_revision:date("2021-08-19")}),
	(av26:Avion {id_avion:"251NXLR", modelo:"Airbus A321-251NXLR", millas_autonomia:4000, numero_pasajeros:186, numero_integrantes_tripulacion:5, utlima_revision:date("2022-09-22")}),
	(av27:Avion {id_avion:"A231", modelo:"Airbus A321-231", millas_autonomia:3000, numero_pasajeros:199, numero_integrantes_tripulacion:6, utlima_revision:date("2023-04-04")})
WITH av25, av26, av27
MATCH (ec3:Continental) WHERE ec3.rfc="RFCCON33333"
CREATE
	(ec3)-[:PROPIEDAD]->(av25),
	(ec3)-[:PROPIEDAD]->(av26),
	(ec3)-[:PROPIEDAD]->(av27)
CREATE
	(p1:Personal {id_personal:"A11111", nacionalidad:"mexicana", pais_residencia:"México", nombre1:"Juan", nombre2:"Arnoldo", direccion:"Eje Central Lázaro Cárdenas 110, Obrera, Cuauhtémoc, 06800 Ciudad de México CDMX", lengua_materna: "Español"}),
	(p2:Personal {id_personal:"A22222", nacionalidad:"mexicana", pais_residencia:"México", nombre1:"José", nombre2:"Fernando", direccion:"Pemex 11, Industrial, Gustavo A. Madero, 07800 Ciudad de México, CDMX", lengua_materna: "Español"}),
(p3:Personal {id_personal:"A33333", nacionalidad:"mexicana", pais_residencia:"México", nombre1:"Raúl", nombre2:"Horacio", direccion:"Nte. 31-A 60-154, Lindavista Vallejo, Gustavo A. Madero, 07720 Ciudad de México, CDMX", lengua_materna: "Español"})
WITH p1,p2,p3
MATCH (en1:Nacional) WHERE en1.rfc="RFCNAC11111"
CREATE
	(en1)<-[:PILOTO {licencia:"ATPL", ultima_evaluacion:date("2024-01-31")}]-(p1),
	(en1)<-[:PILOTO {licencia:"PPL", ultima_evaluacion:date("2022-07-12")}]-(p2),
	(en1)<-[:PILOTO {licencia:"CPL", ultima_evaluacion:date("2023-08-01")}]-(p3)
CREATE
	(p4:Personal {id_personal:"A44444", nacionalidad:"mexicana", pais_residencia:"México", nombre1:"Gabriela", nombre2:"Josefina", direccion:"s, Miguel Hidalgo, 11590 Ciudad de México, CDMX", lengua_materna: "Español"}),
	(p5:Personal {id_personal:"A55555", nacionalidad:"mexicana", pais_residencia:"México", nombre1:"Ramón", nombre2:"Ernesto", direccion:"Argentina Poniente, Miguel Hidalgo, 11230 Ciudad de México, CDMX", lengua_materna: "Español"}),
(p6:Personal {id_personal:"A66666", nacionalidad:"mexicana", pais_residencia:"México", nombre1:"Mónica", nombre2:"Rebeca", direccion:"Bienes Nacionales 3-11, Zona Urbana Ejidal Estrella Culhuacan, Iztapalapa, 09800 Ciudad de México, CDMX", lengua_materna: "Español"})
WITH p4,p5,p6
MATCH (en1:Nacional) WHERE en1.rfc="RFCNAC11111"
CREATE
	(en1)<-[:TIERRA {tareas:["tarea 1", "tarea 2"], certificaciones_laborales:["certificación 1", "certifiación 2", "certificacion 3"]}]-(p4),
	(en1)<-[:TIERRA {tareas:["tarea 1", "tarea 2", "tarea 3"], certificaciones_laborales:["certificación 1", "certifiación 2", "certificacion 3"]}]-(p5),
	(en1)<-[:TIERRA {tareas:["tarea 1", "tarea 2"], certificaciones_laborales:["certificación 1", "certifiación 2"]}]-(p6)
CREATE
	(p7:Personal {id_personal:"A77777", nacionalidad:"mexicana", pais_residencia:"México", nombre1:"Sarahí", nombre2:"Ximena", direccion:"Sagu 121, Granjas Esmeralda, Iztapalapa, 09810 Ciudad de México, CDMX", lengua_materna: "Español"}),
	(p8:Personal {id_personal:"A88888", nacionalidad:"mexicana", pais_residencia:"México", nombre1:"Daniel", nombre2:"Ricardo", direccion:"C. Pitágoras 832-808, Narvarte Poniente, Benito Juárez, 03020 Ciudad de México, CDMX", lengua_materna: "Español"}),
(p9:Personal {id_personal:"A99999", nacionalidad:"mexicana", pais_residencia:"México", nombre1:"Eduardo", nombre2:"Miguel", direccion:"Anaxágoras 665-741, Narvarte Poniente, Benito Juárez, 03020 Ciudad de México, CDMX", lengua_materna: "Español"})
WITH p7,p8,p9
MATCH (en1:Nacional) WHERE en1.rfc="RFCNAC11111"
CREATE
(en1)<-[:APOYO {idiomas_habla:["Español","Inglés","Alemán"], numero_telefono:"551234567"}]-(p7),
(en1)<-[:APOYO {idiomas_habla:["Español","Chino"], numero_telefono:"553453212"}]-(p8),
(en1)<-[:APOYO {idiomas_habla:["Español","Inglés","Coreano"], numero_telefono:"556543354"}]-(p9)
CREATE
(p10:Personal {id_personal:"VI11111", nacionalidad:"mexicana", pais_residencia:"México", nombre1:"Jorge", nombre2:"Armando", direccion:"José Arrese 965-923, 5 de Mayo, 44970 Guadalajara, Jal.", lengua_materna: "Español"}),
	(p11:Personal {id_personal:"VI22222", nacionalidad:"mexicana", pais_residencia:"México", nombre1:"Frida", nombre2:"Fernanda", direccion:"C. 20-A 2823-2771, Echeverría, 44970 Guadalajara, Jal.", lengua_materna: "Español"}),
(p12:Personal {id_personal:"VI33333", nacionalidad:"mexicana", pais_residencia:"México", nombre1:"Marisol", nombre2:"Esmeralda", direccion:"Garbanzo 751-705, La Nogalera, 44470 Guadalajara, Jal.", lengua_materna: "Español"})
WITH p10,p11,p12
MATCH (en2:Nacional) WHERE en2.rfc="RFCNAC22222"
CREATE
	(en2)<-[:PILOTO {licencia:"CPL", ultima_evaluacion:date("2022-06-29")}]-(p10),
	(en2)<-[:PILOTO {licencia:"LAPL", ultima_evaluacion:date("2021-11-12")}]-(p11),
	(en2)<-[:PILOTO {licencia:"ATPL", ultima_evaluacion:date("2021-09-01")}]-(p12)
CREATE
	(p13:Personal {id_personal:"VI44444", nacionalidad:"mexicana", pais_residencia:"México", nombre1:"Omar", nombre2:"Gabriel", direccion:"C. P.º de los Claveles 47-58, La Martinica, 45185 Zapopan, Jal.", lengua_materna: "Español"}),
	(p14:Personal {id_personal:"VI55555", nacionalidad:"mexicana", pais_residencia:"México", nombre1:"Rodrigo", nombre2:"Natanael", direccion:"C. Jardines de las Azucenas 1455-1407, Jardines del Vergel, 45180 Zapopan, Jal.", lengua_materna: "Español"}),
(p15:Personal {id_personal:"VI66666", nacionalidad:"mexicana", pais_residencia:"México", nombre1:"Michelle", nombre2:"Diana", direccion:"Arrayán 445-319, Jardines del Vergel, 45187 Zapopan, Jal.", lengua_materna: "Español"})
WITH p13,p14,p15
MATCH (en2:Nacional) WHERE en2.rfc="RFCNAC22222"
CREATE
	(en2)<-[:TIERRA {tareas:["tarea 1", "tarea 2", "tarea 3", "tarea 4"], certificaciones_laborales:["certificación 1", "certifiación 2", "certificacion 3", "certificación 4", "certificación 5"]}]-(p13),
	(en2)<-[:TIERRA {tareas:["tarea 1", "tarea 2"], certificaciones_laborales:["certificación 1"]}]-(p14),
	(en2)<-[:TIERRA {tareas:["tarea 1", "tarea 2"], certificaciones_laborales:["certificación 1", "certifiación 2", "certificación 3"]}]-(p15)
CREATE
	(p16:Personal {id_personal:"VI77777", nacionalidad:"mexicana", pais_residencia:"México", nombre1:"Rigoberto", nombre2:"Saúl", direccion:"C. Pontevedra 1213-1059, Lomas de Zapopan, 45130 Zapopan, Jal.", lengua_materna: "Español"}),
	(p17:Personal {id_personal:"VI88888", nacionalidad:"mexicana", pais_residencia:"México", nombre1:"Hermenegildo", nombre2:"Adán", direccion:"Sta. Teresa 347-305, Santa Margarita1a Secc., 45140 Zapopan, Jal.", lengua_materna: "Español"}),
	(p18:Personal {id_personal:"VI99999", nacionalidad:"mexicana", pais_residencia:"México", nombre1:"Martha", nombre2:"Mariana", direccion:"C. Valle de Guadalupe 1626-1770, Jardines del Valle, 45138 Zapopan, Jal.", lengua_materna: "Español"})
WITH p16,p17,p18
MATCH (en2:Nacional) WHERE en2.rfc="RFCNAC22222"
CREATE
(en2)<-[:APOYO {idiomas_habla:["Español","Inglés","Alemán"], numero_telefono:"336546744"}]-(p16),
(en2)<-[:APOYO {idiomas_habla:["Español","Chino","Inglés"], numero_telefono:"333451211"}]-(p17),
(en2)<-[:APOYO {idiomas_habla:["Español","Alemán","Coreano"], numero_telefono:"335455523"}]-(p18)
CREATE
	(p19:Personal {id_personal:"VO11111", nacionalidad:"mexicana", pais_residencia:"México", nombre1:"Maria", nombre2:"Fernanda", direccion:"Begonia 804-980, Victoria, 64520 Monterrey, N.L.", lengua_materna: "Español"}),
	(p20:Personal {id_personal:"VO22222", nacionalidad:"mexicana", pais_residencia:"México", nombre1:"Miguel", nombre2:"Salvador", direccion:"Vidriera 824-892, Vidriera, 64520 Monterrey, N.L.", lengua_materna: "Español"}),
	(p21:Personal {id_personal:"VO33333", nacionalidad:"mexicana", pais_residencia:"México", nombre1:"Adolfo", nombre2:"Aaron", direccion:"Ernesto García 115-C, Sin Nombre de Col 20, 64500 Monterrey, N.L.", lengua_materna: "Español"})
WITH p19,p20,p21
MATCH (en3:Nacional) WHERE en3.rfc="RFCNAC33333"
CREATE
	(en3)<-[:PILOTO {licencia:"BFCL", ultima_evaluacion:date("2024-02-28")}]-(p19),
	(en3)<-[:PILOTO {licencia:"CPL", ultima_evaluacion:date("2024-01-12")}]-(p20),
	(en3)<-[:PILOTO {licencia:"ATPL", ultima_evaluacion:date("2024-03-01")}]-(p21)
CREATE
	(p22:Personal {id_personal:"VO44444", nacionalidad:"mexicana", pais_residencia:"México", nombre1:"Ximena", nombre2:"Esperanza", direccion:"Tapachula 122-104, Paraíso, 67140 Guadalupe, N.L.", lengua_materna: "Español"}),
	(p23:Personal {id_personal:"VO55555", nacionalidad:"mexicana", pais_residencia:"México", nombre1:"Saúl", nombre2:"Antonio", direccion:"León 270-128, Paraíso, 67140 Guadalupe, N.L.", lengua_materna: "Español"}),
(p24:Personal {id_personal:"VO66666", nacionalidad:"mexicana", pais_residencia:"México", nombre1:"José", nombre2:"Luis", direccion:"Privada Hidalgo, La Esmeralda (Unidad Fomerrey), 67140 Guadalupe, N.L.", lengua_materna: "Español"})
WITH p22,p23,p24
MATCH (en3:Nacional) WHERE en3.rfc="RFCNAC33333"
CREATE
	(en3)<-[:TIERRA {tareas:["tarea 1", "tarea 2"], certificaciones_laborales:["certificación 1", "certifiación 2", "certificacion 3", "certificación 4", "certificación 5"]}]-(p22),
	(en3)<-[:TIERRA {tareas:["tarea 1", "tarea 2"], certificaciones_laborales:["certificación 1", "certifiación 2", "certificacion 3"]}]-(p23),
	(en3)<-[:TIERRA {tareas:["tarea 1", "tarea 2"], certificaciones_laborales:["certificación 1", "certifiación 2", "certificación 3"]}]-(p24)
CREATE
	(p25:Personal {id_personal:"VO77777", nacionalidad:"mexicana", pais_residencia:"México", nombre1:"Alicia", nombre2:"Fabiola", direccion:"Valle de Los Sabinos 441-401, Valle de Las Palmas I, 66635 Cdad. Apodaca, N.L.", lengua_materna: "Español"}),
	(p26:Personal {id_personal:"VO88888", nacionalidad:"mexicana", pais_residencia:"México", nombre1:"Adalberto", nombre2:"Ángel", direccion:"Av. de La Esperanza 523-511, Paseo de Las Palmas IV, 66635 Cdad. Apodaca, N.L.", lengua_materna: "Español"}),
	(p27:Personal {id_personal:"VO99999", nacionalidad:"mexicana", pais_residencia:"México", nombre1:"Oscar", nombre2:"Luis", direccion:"Datilera 66, Sin Nombre de Col 3, 66635 Cdad. Apodaca, N.L.", lengua_materna: "Español"})
WITH p25,p26,p27
MATCH (en3:Nacional) WHERE en3.rfc="RFCNAC33333"
CREATE
(en3)<-[:APOYO {idiomas_habla:["Español","Inglés","Alemán","Francés"], numero_telefono:""}]-(p25),
(en3)<-[:APOYO {idiomas_habla:["Español","Chino","Inglés","Catalán"], numero_telefono:""}]-(p26),
(en3)<-[:APOYO {idiomas_habla:["Español","Alemán","Inglés"], numero_telefono:""}]-(p27)
CREATE
	(p28:Personal {id_personal:"AC11111", nacionalidad:"canadiense", pais_residencia:"Canadá", nombre1:"John", nombre2:"Doe", direccion:"123 Elm Street, Toronto, ON", lengua_materna: "Inglés"}),
	(p29:Personal {id_personal:"AC22222", nacionalidad:"canadiense", pais_residencia:"Canadá", nombre1:"Marie", nombre2:"Curie", direccion:"456 Maple Ave, Montreal, QC", lengua_materna: "Francés"}),
	(p30:Personal {id_personal:"AC33333", nacionalidad:"canadiense", pais_residencia:"Canadá", nombre1:"Pierre", nombre2:"Lavoie", direccion:"789 Oak St, Quebec City, QC", lengua_materna: "Francés"})
WITH p28,p29,p30 
MATCH (ei1:Internacional) WHERE ei1.rfc="RFCINT11111"
CREATE
	(ei1)<-[:PILOTO {licencia:"SFCL", ultima_evaluacion:date("2024-01-15")} ]-(p28),
	(ei1)<-[:PILOTO {licencia:"CPL", ultima_evaluacion:date("2024-02-20")} ]-(p29),
	(ei1)<-[:PILOTO {licencia:"ATPL", ultima_evaluacion:date("2024-03-30")} ]-(p30)
CREATE
	(p31:Personal {id_personal:"AC44444", nacionalidad:"canadiense", pais_residencia:"Canadá", nombre1:"Emma", nombre2:"Watson", direccion:"101 Pine Rd, Calgary, AB", lengua_materna: "Inglés"}),
	(p32:Personal {id_personal:"AC55555", nacionalidad:"canadiense", pais_residencia:"Canadá", nombre1:"François", nombre2:"Dufresne", direccion:"202 Birch St, Ottawa, ON", lengua_materna: "Inglés"}),
	(p33:Personal {id_personal:"AC66666", nacionalidad:"canadiense", pais_residencia:"Canadá", nombre1:"Luc", nombre2:"Lemoine", direccion:"303 Cedar Blvd, Victoria, BC", lengua_materna: "Francés"})
WITH p31,p32,p33
MATCH (ei1:Internacional) WHERE ei1.rfc="RFCINT11111"
CREATE
	(ei1)<-[:TIERRA {tareas:["tarea 1", "tarea 2"], certificaciones_laborales:["certificación 1", "certificación 2", "certificación 3", "certificación 4", "certificación 5"]}]-(p31),
	(ei1)<-[:TIERRA {tareas:["tarea 1", "tarea 2"], certificaciones_laborales:["certificación 1", "certificación 2", "certificación 3"]}]-(p32),
	(ei1)<-[:TIERRA {tareas:["tarea 1", "tarea 2"], certificaciones_laborales:["certificación 1", "certificación 2", "certificación 3", "certificación 4"]}]-(p33)
CREATE
	(p34:Personal {id_personal:"AC77777", nacionalidad:"canadiense", pais_residencia:"Canadá", nombre1:"Sophie", nombre2:"Martin", direccion:"404 Willow Dr, Halifax, NS", lengua_materna: "Inglés"}),
	(p35:Personal {id_personal:"AC88888", nacionalidad:"canadiense", pais_residencia:"Canadá", nombre1:"Etienne", nombre2:"Gagnon", direccion:"505 Spruce Ct, Winnipeg, MB", lengua_materna: "Inglés"}),
	(p36:Personal {id_personal:"AC99999", nacionalidad:"canadiense", pais_residencia:"Canadá", nombre1:"Claire", nombre2:"Berger", direccion:"606 Fir St, Edmonton, AB", lengua_materna: "Francés"})
WITH p34,p35,p36
MATCH (ei1:Internacional) WHERE ei1.rfc="RFCINT11111"
CREATE
	(ei1)<-[:APOYO {idiomas_habla:["Español","Inglés","Alemán","Francés"], numero_telefono:"+1-234-567-8900"}]-(p34),
	(ei1)<-[:APOYO {idiomas_habla:["Español","Inglés","Francés"], numero_telefono:"+1-234-567-8901"}]-(p35),
	(ei1)<-[:APOYO {idiomas_habla:["Portugués","Inglés","Francés"], numero_telefono:"+1-234-567-8902"}]-(p36)
CREATE
	(p37:Personal {id_personal:"AA11111", nacionalidad:"estadounidense", pais_residencia:"Estados Unidos", nombre1:"James", nombre2:"Smith", direccion:"123 Main St, Dallas, TX", lengua_materna: "Inglés"}),
	(p38:Personal {id_personal:"AA22222", nacionalidad:"estadounidense", pais_residencia:"Canadá", nombre1:"Linda", nombre2:"Johnson", direccion:"456 Second St, Toronto, ON", lengua_materna: "Inglés"}),
	(p39:Personal {id_personal:"AA33333", nacionalidad:"estadounidense", pais_residencia:"Canadá", nombre1:"Michael", nombre2:"Brown", direccion:"789 Third St, Vancouver, BC", lengua_materna: "Inglés"})
WITH p37,p38,p39 
MATCH (ei2:Internacional) WHERE ei2.rfc="RFCINT22222"
CREATE
	(ei2)<-[:PILOTO {licencia:"PPL", ultima_evaluacion:date("2024-04-15")} ]-(p37),
	(ei2)<-[:PILOTO {licencia:"CPL", ultima_evaluacion:date("2024-05-20")} ]-(p38),
	(ei2)<-[:PILOTO {licencia:"ATPL", ultima_evaluacion:date("2024-06-30")} ]-(p39)
CREATE
	(p40:Personal {id_personal:"AA44444", nacionalidad:"estadounidense", pais_residencia:"Estados Unidos", nombre1:"Sarah", nombre2:"Davis", direccion:"101 Fourth St, Miami, FL", lengua_materna: "Inglés"}),
	(p41:Personal {id_personal:"AA55555", nacionalidad:"estadounidense", pais_residencia:"Canadá", nombre1:"David", nombre2:"Garcia", direccion:"202 Fifth St, Calgary, AB", lengua_materna: "Inglés"}),
	(p42:Personal {id_personal:"AA66666", nacionalidad:"estadounidense", pais_residencia:"Canadá", nombre1:"Jessica", nombre2:"Martinez", direccion:"303 Sixth St, Ottawa, ON", lengua_materna: "Inglés"})
WITH p40,p41,p42
MATCH (ei2:Internacional) WHERE ei2.rfc="RFCINT22222"
CREATE
	(ei2)<-[:TIERRA {tareas:["supervisión", "mantenimiento"], certificaciones_laborales:["certificación 1", "certificación 2", "certificación 3", "certificación 4", "certificación 5"]}]-(p40),
	(ei2)<-[:TIERRA {tareas:["atención al cliente", "coordinación"], certificaciones_laborales:["certificación 1", "certificación 2", "certificación 3"]}]-(p41),
	(ei2)<-[:TIERRA {tareas:["logística", "operaciones"], certificaciones_laborales:["certificación 1", "certificación 2", "certificación 3", "certificación 4"]}]-(p42)
CREATE
	(p43:Personal {id_personal:"AA77777", nacionalidad:"estadounidense", pais_residencia:"Estados Unidos", nombre1:"Karen", nombre2:"Wilson", direccion:"404 Seventh St, Seattle, WA", lengua_materna: "Inglés"}),
	(p44:Personal {id_personal:"AA88888", nacionalidad:"estadounidense", pais_residencia:"Canadá", nombre1:"Robert", nombre2:"Anderson", direccion:"505 Eighth St, Montreal, QC", lengua_materna: "Inglés"}),
	(p45:Personal {id_personal:"AA99999", nacionalidad:"estadounidense", pais_residencia:"Canadá", nombre1:"Laura", nombre2:"Thomas", direccion:"606 Ninth St, Toronto, ON", lengua_materna: "Inglés"})
WITH p43,p44,p45
MATCH (ei2:Internacional) WHERE ei2.rfc="RFCINT22222"
CREATE
	(ei2)<-[:APOYO {idiomas_habla:["Español","Inglés","Francés"], numero_telefono:"+1-555-123-4567"}]-(p43),
	(ei2)<-[:APOYO {idiomas_habla:["Español","Inglés","Chino"], numero_telefono:"+1-555-123-4568"}]-(p44),
	(ei2)<-[:APOYO {idiomas_habla:["Portugués","Inglés","Francés"], numero_telefono:"+1-555-123-4569"}]-(p45)
CREATE
	(p46:Personal {id_personal:"DA11111", nacionalidad:"estadounidense", pais_residencia:"Estados Unidos", nombre1:"Christopher", nombre2:"Walker", direccion:"123 Maple St, Atlanta, GA", lengua_materna: "Inglés"}),
	(p47:Personal {id_personal:"DA22222", nacionalidad:"estadounidense", pais_residencia:"Estados Unidos", nombre1:"Patricia", nombre2:"Clark", direccion:"456 Oak St, Miami, FL", lengua_materna: "Inglés"}),
	(p48:Personal {id_personal:"DA33333", nacionalidad:"estadounidense", pais_residencia:"Estados Unidos", nombre1:"Matthew", nombre2:"Lewis", direccion:"789 Pine St, Dallas, TX", lengua_materna: "Inglés"})
WITH p46,p47,p48 
MATCH (ei3:Internacional) WHERE ei3.rfc="RFCINT33333"
CREATE
	(ei3)<-[:PILOTO {licencia:"ATPL", ultima_evaluacion:date("2024-04-15")} ]-(p46),
	(ei3)<-[:PILOTO {licencia:"CPL", ultima_evaluacion:date("2024-05-20")} ]-(p47),
	(ei3)<-[:PILOTO {licencia:"PPL", ultima_evaluacion:date("2024-06-30")} ]-(p48)
CREATE
	(p49:Personal {id_personal:"DA44444", nacionalidad:"estadounidense", pais_residencia:"Estados Unidos", nombre1:"Emily", nombre2:"Harris", direccion:"101 Cherry St, Orlando, FL", lengua_materna: "Inglés"}),
	(p50:Personal {id_personal:"DA55555", nacionalidad:"estadounidense", pais_residencia:"Estados Unidos", nombre1:"James", nombre2:"Martin", direccion:"202 Walnut St, Seattle, WA", lengua_materna: "Inglés"}),
	(p51:Personal {id_personal:"DA66666", nacionalidad:"estadounidense", pais_residencia:"Estados Unidos", nombre1:"Olivia", nombre2:"Thompson", direccion:"303 Birch St, Chicago, IL", lengua_materna: "Inglés"})
WITH p49,p50,p51
MATCH (ei3:Internacional) WHERE ei3.rfc="RFCINT33333"
CREATE
	(ei3)<-[:TIERRA {tareas:["supervisión", "atención al cliente"], certificaciones_laborales:["certificación 1", "certificación 2", "certificación 3", "certificación 4", "certificación 5"]}]-(p49),
	(ei3)<-[:TIERRA {tareas:["mantenimiento", "coordinación"], certificaciones_laborales:["certificación 1", "certificación 2", "certificación 3"]}]-(p50),
	(ei3)<-[:TIERRA {tareas:["logística", "operaciones"], certificaciones_laborales:["certificación 1", "certificación 2", "certificación 3", "certificación 4"]}]-(p51)
CREATE
	(p52:Personal {id_personal:"DA77777", nacionalidad:"estadounidense", pais_residencia:"Estados Unidos", nombre1:"Sophia", nombre2:"Moore", direccion:"404 Cedar St, San Francisco, CA", lengua_materna: "Inglés"}),
	(p53:Personal {id_personal:"DA88888", nacionalidad:"estadounidense", pais_residencia:"Estados Unidos", nombre1:"Daniel", nombre2:"Taylor", direccion:"505 Spruce St, Denver, CO", lengua_materna: "Inglés"}),
	(p54:Personal {id_personal:"DA99999", nacionalidad:"estadounidense", pais_residencia:"Estados Unidos", nombre1:"Isabella", nombre2:"Anderson", direccion:"606 Fir St, New York, NY", lengua_materna: "Inglés"})
WITH p52,p53,p54
MATCH (ei3:Internacional) WHERE ei3.rfc="RFCINT33333"
CREATE
	(ei3)<-[:APOYO {idiomas_habla:["Español","Inglés","Francés"], numero_telefono:"+1-555-234-5678"}]-(p52),
	(ei3)<-[:APOYO {idiomas_habla:["Español","Inglés","Chino"], numero_telefono:"+1-555-234-5679"}]-(p53),
	(ei3)<-[:APOYO {idiomas_habla:["Portugués","Inglés","Francés"], numero_telefono:"+1-555-234-5680"}]-(p54)
CREATE
	(p55:Personal {id_personal:"LG11111", nacionalidad:"alemana", pais_residencia:"Alemania", nombre1:"Hans", nombre2:"Müller", direccion:"Berlin, Alemania", lengua_materna: "Alemán"}),
	(p56:Personal {id_personal:"LG22222", nacionalidad:"alemana", pais_residencia:"Alemania", nombre1:"Jürgen", nombre2:"Schmidt", direccion:"Munich, Alemania", lengua_materna: "Alemán"}),
	(p57:Personal {id_personal:"LG33333", nacionalidad:"alemana", pais_residencia:"Alemania", nombre1:"Klaus", nombre2:"Weber", direccion:"Frankfurt, Alemania", lengua_materna: "Alemán"})
WITH p55,p56,p57 
MATCH (ec1:Continental) WHERE ec1.rfc="RFCCON11111"
CREATE
	(ec1)<-[:PILOTO {licencia:"LAPL", ultima_evaluacion:date("2024-01-15")}]-(p55),
	(ec1)<-[:PILOTO {licencia:"CPL", ultima_evaluacion:date("2024-03-10")}]-(p56),
	(ec1)<-[:PILOTO {licencia:"SFCL", ultima_evaluacion:date("2024-05-25")}]-(p57)
CREATE
	(p58:Personal {id_personal:"LG44444", nacionalidad:"alemana", pais_residencia:"Alemania", nombre1:"Anna", nombre2:"Mayer", direccion:"Hamburgo, Alemania", lengua_materna: "Alemán"}),
	(p59:Personal {id_personal:"LG55555", nacionalidad:"alemana", pais_residencia:"Alemania", nombre1:"Julia", nombre2:"Fischer", direccion:"Düsseldorf, Alemania", lengua_materna: "Alemán"}),
	(p60:Personal {id_personal:"LG66666", nacionalidad:"alemana", pais_residencia:"Alemania", nombre1:"Lukas", nombre2:"Schneider", direccion:"Colonia, Alemania", lengua_materna: "Alemán"})
WITH p58,p59,p60
MATCH (ec1:Continental) WHERE ec1.rfc="RFCCON11111"
CREATE
	(ec1)<-[:TIERRA {tareas:["Mantenimiento", "Logística"], certificaciones_laborales:["ISO 9001", "OHSAS 18001", "Certificación Técnica", "Seguridad Aeroportuaria", "Primero Auxilios"]}]-(p58),
	(ec1)<-[:TIERRA {tareas:["Servicio al Cliente", "Logística"], certificaciones_laborales:["ISO 9001", "Certificación Técnica", "Seguridad Aeroportuaria"]}]-(p59),
	(ec1)<-[:TIERRA {tareas:["Coordinación", "Logística"], certificaciones_laborales:["ISO 9001", "Certificación Técnica", "Seguridad Aeroportuaria", "Gestión de Recursos"]}]-(p60)
CREATE
	(p61:Personal {id_personal:"LG77777", nacionalidad:"alemana", pais_residencia:"Alemania", nombre1:"Sophie", nombre2:"Krüger", direccion:"Hamburgo, Alemania", lengua_materna: "Alemán"}),
	(p62:Personal {id_personal:"LG88888", nacionalidad:"alemana", pais_residencia:"Alemania", nombre1:"Ben", nombre2:"Neumann", direccion:"Munich, Alemania", lengua_materna: "Alemán"}),
	(p63:Personal {id_personal:"LG99999", nacionalidad:"alemana", pais_residencia:"Alemania", nombre1:"Max", nombre2:"Becker", direccion:"Stuttgart, Alemania", lengua_materna: "Alemán"})
WITH p61,p62,p63
MATCH (ec1:Continental) WHERE ec1.rfc="RFCCON11111"
CREATE
	(ec1)<-[:APOYO {idiomas_habla:["Inglés","Francés","Alemán"], numero_telefono:"4911111111"}]-(p61),
	(ec1)<-[:APOYO {idiomas_habla:["Alemán","Inglés"], numero_telefono:"4922222222"}]-(p62),
	(ec1)<-[:APOYO {idiomas_habla:["Alemán","Español"], numero_telefono:"4933333333"}]-(p63)
CREATE
	(p64:Personal {id_personal:"AH11111", nacionalidad:"alemana", pais_residencia:"Alemania", nombre1:"Erik", nombre2:"Wolf", direccion:"Bremen, Alemania", lengua_materna: "Alemán"}),
	(p65:Personal {id_personal:"AH22222", nacionalidad:"alemana", pais_residencia:"Alemania", nombre1:"Laura", nombre2:"Meier", direccion:"Hannover, Alemania", lengua_materna: "Alemán"}),
	(p66:Personal {id_personal:"AH33333", nacionalidad:"alemana", pais_residencia:"Alemania", nombre1:"Tom", nombre2:"Schwarz", direccion:"Hamburgo, Alemania", lengua_materna: "Alemán"})
WITH p64,p65,p66
MATCH (ec2:Continental) WHERE ec2.rfc="RFCCON22222"
CREATE
	(ec2)<-[:PILOTO {licencia:"LAPL", ultima_evaluacion:date("2023-12-20")}]-(p64),
	(ec2)<-[:PILOTO {licencia:"SFCL", ultima_evaluacion:date("2024-01-10")}]-(p65),
	(ec2)<-[:PILOTO {licencia:"BFCL", ultima_evaluacion:date("2024-02-05")}]-(p66)
CREATE
	(p67:Personal {id_personal:"AH44444", nacionalidad:"alemana", pais_residencia:"Alemania", nombre1:"Emma", nombre2:"Brandt", direccion:"Dortmund, Alemania", lengua_materna: "Alemán"}),
	(p68:Personal {id_personal:"AH55555", nacionalidad:"alemana", pais_residencia:"Alemania", nombre1:"Nina", nombre2:"Lehmann", direccion:"Essen, Alemania", lengua_materna: "Alemán"}),
	(p69:Personal {id_personal:"AH66666", nacionalidad:"alemana", pais_residencia:"Alemania", nombre1:"Felix", nombre2:"Schuster", direccion:"Leipzig, Alemania", lengua_materna: "Alemán"})
WITH p67,p68,p69
MATCH (ec2:Continental) WHERE ec2.rfc="RFCCON22222"
CREATE
	(ec2)<-[:TIERRA {tareas:["Mantenimiento", "Soporte Técnico"], certificaciones_laborales:["ISO 9001", "Certificación Técnica", "Seguridad Aeroportuaria", "Inglés Básico"]}]-(p67),
	(ec2)<-[:TIERRA {tareas:["Atención al Cliente", "Logística"], certificaciones_laborales:["ISO 9001", "Certificación Técnica"]}]-(p68),
	(ec2)<-[:TIERRA {tareas:["Gestión de Recursos", "Logística"], certificaciones_laborales:["ISO 9001", "Certificación Técnica", "Seguridad Aeroportuaria"]}]-(p69)
CREATE
	(p70:Personal {id_personal:"AH77777", nacionalidad:"alemana", pais_residencia:"Alemania", nombre1:"Paul", nombre2:"Zimmermann", direccion:"Freiburg, Alemania", lengua_materna: "Alemán"}),
	(p71:Personal {id_personal:"AH88888", nacionalidad:"alemana", pais_residencia:"Alemania", nombre1:"Lisa", nombre2:"Koch", direccion:"Bonn, Alemania", lengua_materna: "Alemán"}),
	(p72:Personal {id_personal:"AH99999", nacionalidad:"alemana", pais_residencia:"Alemania", nombre1:"Jan", nombre2:"Roth", direccion:"Mainz, Alemania", lengua_materna: "Alemán"})
WITH p70,p71,p72
MATCH (ec2:Continental) WHERE ec2.rfc="RFCCON22222"
CREATE
	(ec2)<-[:APOYO {idiomas_habla:["Francés","Inglés","Alemán"], numero_telefono:"4944444444"}]-(p70),
	(ec2)<-[:APOYO {idiomas_habla:["Alemán","Inglés"], numero_telefono:"4955555555"}]-(p71),
	(ec2)<-[:APOYO {idiomas_habla:["Alemán","Inglés"], numero_telefono:"4966666666"}]-(p72)
CREATE
	(p73:Personal {id_personal:"JA11111", nacionalidad:"australiana", pais_residencia:"Australia", nombre1:"Jack", nombre2:"Williams", direccion:"Sídney, Australia", lengua_materna: "Inglés"}),
	(p74:Personal {id_personal:"JA22222", nacionalidad:"australiana", pais_residencia:"Australia", nombre1:"Olivia", nombre2:"Taylor", direccion:"Melbourne, Australia", lengua_materna: "Inglés"}),
	(p75:Personal {id_personal:"JA33333", nacionalidad:"australiana", pais_residencia:"Australia", nombre1:"Liam", nombre2:"Brown", direccion:"Perth, Australia", lengua_materna: "Inglés"})
WITH p73,p74,p75
MATCH (ec3:Continental) WHERE ec3.rfc="RFCCON33333"
CREATE
	(ec3)<-[:PILOTO {licencia:"PPL", ultima_evaluacion:date("2024-01-12")}]-(p73),
	(ec3)<-[:PILOTO {licencia:"ATPL", ultima_evaluacion:date("2024-02-25")}]-(p74),
	(ec3)<-[:PILOTO {licencia:"BFCL", ultima_evaluacion:date("2024-03-18")}]-(p75)
CREATE
	(p76:Personal {id_personal:"JA44444", nacionalidad:"australiana", pais_residencia:"Australia", nombre1:"Ella", nombre2:"Walker", direccion:"Brisbane, Australia", lengua_materna: "Inglés"}),
	(p77:Personal {id_personal:"JA55555", nacionalidad:"australiana", pais_residencia:"Australia", nombre1:"Emily", nombre2:"Harris", direccion:"Adelaida, Australia", lengua_materna: "Inglés"}),
	(p78:Personal {id_personal:"JA66666", nacionalidad:"australiana", pais_residencia:"Australia", nombre1:"Lucas", nombre2:"Jones", direccion:"Gold Coast, Australia", lengua_materna: "Inglés"})
WITH p76,p77,p78
MATCH (ec3:Continental) WHERE ec3.rfc="RFCCON33333"
CREATE
	(ec3)<-[:TIERRA {tareas:["Mantenimiento", "Carga y descarga"], certificaciones_laborales:["ISO 9001", "Certificación Técnica", "Seguridad Aeroportuaria", "Inglés Básico", "Primeros Auxilios"]}]-(p76),
	(ec3)<-[:TIERRA {tareas:["Soporte Técnico", "Coordinación"], certificaciones_laborales:["ISO 9001", "Seguridad Aeroportuaria", "Inglés Básico"]}]-(p77),
	(ec3)<-[:TIERRA {tareas:["Servicio al Cliente", "Gestión de Recursos"], certificaciones_laborales:["ISO 9001", "Certificación Técnica", "Inglés Básico", "Primeros Auxilios"]}]-(p78)
CREATE
	(p79:Personal {id_personal:"JA77777", nacionalidad:"australiana", pais_residencia:"Australia", nombre1:"Sophia", nombre2:"Evans", direccion:"Canberra, Australia", lengua_materna: "Inglés"}),
	(p80:Personal {id_personal:"JA88888", nacionalidad:"australiana", pais_residencia:"Australia", nombre1:"Noah", nombre2:"Anderson", direccion:"Darwin, Australia", lengua_materna: "Inglés"}),
	(p81:Personal {id_personal:"JA99999", nacionalidad:"australiana", pais_residencia:"Australia", nombre1:"Mia", nombre2:"Thomas", direccion:"Hobart, Australia", lengua_materna: "Inglés"})
WITH p79,p80,p81
MATCH (ec3:Continental) WHERE ec3.rfc="RFCCON33333"
CREATE
	(ec3)<-[:APOYO {idiomas_habla:["Inglés","Francés","Japonés"], numero_telefono:"611111111"}]-(p79),
	(ec3)<-[:APOYO {idiomas_habla:["Inglés","Alemán","Francés"], numero_telefono:"622222222"}]-(p80),
	(ec3)<-[:APOYO {idiomas_habla:["Inglés","Español","Mandarín"], numero_telefono:"633333333"}]-(p81)
	
CREATE (r1:Ruta {codigo: "r-001", origen: 11111, destino: 33333, duracion: duration({minutes: 100})})
CREATE (r2:Ruta {codigo:"r-002", origen:11111*,* destino:22222*,* duracion:duration({minutes: 85})})
CREATE (r3:Ruta {codigo:"r-003", origen:22222*,* destino:33333*,* duracion:duration({minutes: 95})})
CREATE (r4:Ruta {codigo:"r-004", origen:11111*,* destino:44444*,* duracion:duration({minutes: 255}), escala:[33333]})
CREATE (r5:Ruta {codigo:"r-005", origen:11111*,* destino:55555*,* duracion:duration({minutes: 360}), escala:[33333]})
CREATE (r6:Ruta {codigo: "r-006", origen: 55555, destino: 77777, duracion: duration({minutes: 360}), escala: [66666]})
CREATE (r7:Ruta {codigo: "r-007", origen: 33333, destino: 77777, duracion: duration({minutes: 330}), escala: [55555, 66666] })
CREATE (r8:Ruta {codigo: "r-008", origen: 22222, destino: 666666, duracion: duration({minutes: 330}), escala: [55555] })
CREATE (r9:Ruta {codigo:"r-009", origen:11111*,* destino:99999*,* duracion:duration({minutes: 1260}), escala:[55555, 66666, 88888]})
CREATE (r10:Ruta {codigo: "r-010", origen: 77777, destino: 99999, duracion: duration({minutes: 330}), escala: [88888] })
CREATE (r11:Ruta {codigo: "r-011", origen: 22222, destino: 88888, duracion: duration({minutes: 900}), escala: [55555, 77777] })
```

```bash
MATCH (en1:Nacional {rfc: "RFCNAC11111"})
MATCH (en2:Nacional {rfc: "RFCNAC22222"})
MATCH (en3:Nacional {rfc: "RFCNAC33333"})
MATCH (ei1:Internacional {rfc: "RFCINT11111"})
MATCH (ei2:Internacional {rfc: "RFCINT22222"})
MATCH (ei3:Internacional {rfc: "RFCINT33333"})
MATCH (ec1:Continental {rfc: "RFCCON11111"})
MATCH (ec2:Continental {rfc: "RFCCON22222"})
MATCH (ec3:Continental {rfc: "RFCCON33333"})
MATCH (a1:Aeropuerto {id_aeropuerto: 11111})
MATCH (a2:Aeropuerto {id_aeropuerto: 22222})
MATCH (a3:Aeropuerto {id_aeropuerto: 33333})
MATCH (a4:Aeropuerto {id_aeropuerto: 44444})
MATCH (a5:Aeropuerto {id_aeropuerto: 55555})
MATCH (a6:Aeropuerto {id_aeropuerto: 66666})
MATCH (a7:Aeropuerto {id_aeropuerto: 77777})
MATCH (a8:Aeropuerto {id_aeropuerto: 88888})
MATCH (a9:Aeropuerto {id_aeropuerto: 99999})
MATCH (r1:Ruta {codigo:"r-001"})
MATCH (r2:Ruta {codigo:"r-002"})
MATCH (r3:Ruta {codigo:"r-003"})

MATCH (r4:Ruta {codigo:"r-004"})
MATCH (r5:Ruta {codigo:"r-005"})
MATCH (r6:Ruta {codigo:"r-006"})
MATCH (r7:Ruta {codigo:"r-007"})
MATCH (r8:Ruta {codigo:"r-008"})

MATCH (r9:Ruta {codigo:"r-009"})
MATCH (r10:Ruta {codigo:"r-010"})
MATCH (r11:Ruta {codigo:"r-011"})

MATCH (av4:Avion {id_avion:"A320"})
MATCH (av5:Avion {id_avion:"737-33A"})
MATCH (av6:Avion {id_avion:"A321-271NX"})

MATCH (av7:Avion {id_avion:"A319"})
MATCH (av8:Avion {id_avion:"A320N"})
MATCH (av9:Avion {id_avion:"A321N"})

MATCH (av10:Avion {id_avion:"77W"})
MATCH (av11:Avion {id_avion:"333"})
MATCH (av12:Avion {id_avion:"E75"})

MATCH (av13:Avion {id_avion:"7200LR"})
MATCH (av14:Avion {id_avion:"747-SP"})
MATCH (av15:Avion {id_avion:"757-200"})

MATCH (av16:Avion {id_avion:"7200LR"})
MATCH (av17:Avion {id_avion:"747-SP"})
MATCH (av18:Avion {id_avion:"757-200"})

MATCH (av19:Avion {id_avion:"A340-300"})
MATCH (av20:Avion {id_avion:"747-8"})
MATCH (av21:Avion {id_avion:"A340-600"})

MATCH (av22:Avion {id_avion:"7X"})
MATCH (av23:Avion {id_avion:"EL500"})
MATCH (av24:Avion {id_avion:"EP600"})

MATCH (av25:Avion {id_avion:"AA320"})
MATCH (av26:Avion {id_avion:"251NXLR"})
MATCH (av27:Avion {id_avion:"A231"})
MATCH (p1:Personal {id_personal:"A11111"})
MATCH (p2:Personal {id_personal:"A22222"})
MATCH (p3:Personal {id_personal:"A33333"})

MATCH (p4:Personal {id_personal:"VI11111"})
MATCH (p5:Personal {id_personal:"VI22222"})
MATCH (p6:Personal {id_personal:"VI33333"})

MATCH (p7:Personal {id_personal:"VO11111"})
MATCH (p8:Personal {id_personal:"VO22222"})
MATCH (p9:Personal {id_personal:"VO33333"})

MATCH (p10:Personal {id_personal:"AC11111"})
MATCH (p11:Personal {id_personal:"AC22222"})
MATCH (p12:Personal {id_personal:"AC33333"})

MATCH (p13:Personal {id_personal:"AA11111"})
MATCH (p14:Personal {id_personal:"AA22222"})
MATCH (p15:Personal {id_personal:"AA33333"})

MATCH (p16:Personal {id_personal:"DA11111"})
MATCH (p17:Personal {id_personal:"DA22222"})
MATCH (p18:Personal {id_personal:"DA33333"})

MATCH (p19:Personal {id_personal:"LG11111"})
MATCH (p20:Personal {id_personal:"LG22222"})
MATCH (p21:Personal {id_personal:"LG33333"})

MATCH (p22:Personal {id_personal:"AH11111"})
MATCH (p23:Personal {id_personal:"AH22222"})
MATCH (p24:Personal {id_personal:"AH33333"})

MATCH (p25:Personal {id_personal:"JA11111"})
MATCH (p26:Personal {id_personal:"JA22222"})
MATCH (p27:Personal {id_personal:"JA33333"})
CREATE 
    (en1)-[:OPERA]->(a1),
    (en1)-[:OPERA]->(a3),
    (en1)-[:OPERA]->(a5),
    (en1)-[:OPERA]->(a9),
    
    (en2)-[:OPERA]->(a2),
    (en2)-[:OPERA]->(a3),
    (en2)-[:OPERA]->(a7),
    (en2)-[:OPERA]->(a8),
    
    (en3)-[:OPERA]->(a1),
    (en3)-[:OPERA]->(a2),
    (en3)-[:OPERA]->(a6),
    (en3)-[:OPERA]->(a7),
    
    (ei1)-[:OPERA]->(a2),
    (ei1)-[:OPERA]->(a3),
    (ei1)-[:OPERA]->(a4),
    (ei1)-[:OPERA]->(a5),
    
    (ei2)-[:OPERA]->(a1),
    (ei2)-[:OPERA]->(a3),
    (ei2)-[:OPERA]->(a6),
    (ei2)-[:OPERA]->(a8),
    
    (ei3)-[:OPERA]->(a4),
    (ei3)-[:OPERA]->(a5),
    (ei3)-[:OPERA]->(a6),
    (ei3)-[:OPERA]->(a9),
    
    (ec1)-[:OPERA]->(a1),
    (ec1)-[:OPERA]->(a3),
    (ec1)-[:OPERA]->(a6),
    (ec1)-[:OPERA]->(a9),
    
    (ec2)-[:OPERA]->(a3),
    (ec2)-[:OPERA]->(a4),
    (ec2)-[:OPERA]->(a5),
    (ec2)-[:OPERA]->(a8),
    
    (ec3)-[:OPERA]->(a1),
    (ec3)-[:OPERA]->(a4),
    (ec3)-[:OPERA]->(a5),
    (ec3)-[:OPERA]->(a9),
    (av1)-[:ASIGNADA_AVION]->(r1),
	(av2)-[:ASIGNADA_AVION]->(r2),
	(av3)-[:ASIGNADA_AVION]->(r3),
	(av4)-[:ASIGNADA_AVION]->(r3),
	(av5)-[:ASIGNADA_AVION]->(r2),
	(av6)-[:ASIGNADA_AVION]->(r1),
	(av7)-[:ASIGNADA_AVION]->(r2),
	(av8)-[:ASIGNADA_AVION]->(r1),
	(av9)-[:ASIGNADA_AVION]->(r3),
	
	(av10)-[:ASIGNADA_AVION]->(r4),
	(av11)-[:ASIGNADA_AVION]->(r6),
	(av12)-[:ASIGNADA_AVION]->(r7),
	(av13)-[:ASIGNADA_AVION]->(r4),
	(av14)-[:ASIGNADA_AVION]->(r7),
	(av15)-[:ASIGNADA_AVION]->(r8),
	(av16)-[:ASIGNADA_AVION]->(r8),
	(av17)-[:ASIGNADA_AVION]->(r5),
	(av18)-[:ASIGNADA_AVION]->(r6),
	
	(av19)-[:ASIGNADA_AVION]->(r9),
	(av20)-[:ASIGNADA_AVION]->(r10),
	(av21)-[:ASIGNADA_AVION]->(r11),
	(av22)-[:ASIGNADA_AVION]->(r11),
	(av23)-[:ASIGNADA_AVION]->(r10),
	(av24)-[:ASIGNADA_AVION]->(r9),
	(av25)-[:ASIGNADA_AVION]->(r11),
	(av26)-[:ASIGNADA_AVION]->(r9),
	(av27)-[:ASIGNADA_AVION]->(r10),
	(p1)-[:ASIGNADA_PILOTO]->(r1),
	(p1)-[:ASIGNADA_PILOTO]->(r2),
	(p2)-[:ASIGNADA_PILOTO]->(r2),
	(p2)-[:ASIGNADA_PILOTO]->(r3),
	(p3)-[:ASIGNADA_PILOTO]->(r1),
	(p3)-[:ASIGNADA_PILOTO]->(r3),

	(p4)-[:ASIGNADA_PILOTO]->(r2),
	(p4)-[:ASIGNADA_PILOTO]->(r1),
	(p5)-[:ASIGNADA_PILOTO]->(r2),
	(p5)-[:ASIGNADA_PILOTO]->(r3),
	(p6)-[:ASIGNADA_PILOTO]->(r2),
	(p6)-[:ASIGNADA_PILOTO]->(r3),

	(p7)-[:ASIGNADA_PILOTO]->(r2),
	(p7)-[:ASIGNADA_PILOTO]->(r3),
	(p8)-[:ASIGNADA_PILOTO]->(r1),
	(p8)-[:ASIGNADA_PILOTO]->(r3),
	(p9)-[:ASIGNADA_PILOTO]->(r1),
	(p9)-[:ASIGNADA_PILOTO]->(r2),

	(p10)-[:ASIGNADA_PILOTO]->(r4),
	(p10)-[:ASIGNADA_PILOTO]->(r5),
	(p11)-[:ASIGNADA_PILOTO]->(r5),
	(p11)-[:ASIGNADA_PILOTO]->(r6),
	(p12)-[:ASIGNADA_PILOTO]->(r7),
	(p12)-[:ASIGNADA_PILOTO]->(r8),

	(p13)-[:ASIGNADA_PILOTO]->(r6),
	(p13)-[:ASIGNADA_PILOTO]->(r7),
	(p14)-[:ASIGNADA_PILOTO]->(r5),
	(p14)-[:ASIGNADA_PILOTO]->(r8),
	(p15)-[:ASIGNADA_PILOTO]->(r7),
	(p15)-[:ASIGNADA_PILOTO]->(r8),

	(p16)-[:ASIGNADA_PILOTO]->(r4),
	(p16)-[:ASIGNADA_PILOTO]->(r5),
	(p17)-[:ASIGNADA_PILOTO]->(r4),
	(p27)-[:ASIGNADA_PILOTO]->(r8),
	(p18)-[:ASIGNADA_PILOTO]->(r4),
	(p18)-[:ASIGNADA_PILOTO]->(r6),

	(p19)-[:ASIGNADA_PILOTO]->(r9),
	(p19)-[:ASIGNADA_PILOTO]->(r10),
	(p20)-[:ASIGNADA_PILOTO]->(r9),
	(p20)-[:ASIGNADA_PILOTO]->(r11),
	(p21)-[:ASIGNADA_PILOTO]->(r10),
	(p21)-[:ASIGNADA_PILOTO]->(r11),

	(p22)-[:ASIGNADA_PILOTO]->(r10),
	(p22)-[:ASIGNADA_PILOTO]->(r11),
	(p23)-[:ASIGNADA_PILOTO]->(r9),
	(p23)-[:ASIGNADA_PILOTO]->(r10),
	(p24)-[:ASIGNADA_PILOTO]->(r9),
	(p24)-[:ASIGNADA_PILOTO]->(r11),

	(p25)-[:ASIGNADA_PILOTO]->(r9),
	(p25)-[:ASIGNADA_PILOTO]->(r10),
	(p26)-[:ASIGNADA_PILOTO]->(r9),
	(p26)-[:ASIGNADA_PILOTO]->(r11),
	(p27)-[:ASIGNADA_PILOTO]->(r10),
	(p27)-[:ASIGNADA_PILOTO]->(r11)
```

## Modelado de la base de datos

![Maquetado Laboratorio Caso 02 Neo4j, BD NoSQL-Copia de Página-1.drawio (2).png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f2ee27a5-dbb1-4527-81f1-7a94ce7ffd6b/d05688ef-c044-41d2-8cb2-12efd048c8e6/Maquetado_Laboratorio_Caso_02_Neo4j_BD_NoSQL-Copia_de_Pgina-1.drawio_(2).png)

## Ejemplos de creación de nodos

```bash
#---Crear Aeropuertos---
CREATE (a1:Aeropuerto {id_aeropuerto:"11111", nombre:"Aeropuerto Uno", ciudad:"Ciudad 1", direccion:"Direccion", numero_de_pistas:5})

#---Crear Empresas---
#Nacional
CREATE (en1:Empresa&Nacional {rfc:"RFCNAC11111", nombre:"Empresa Nacional Uno", nacionalidad:"Mexicana", direccion_sede:"Direccion de la sede principal", telefonos:["3111234567", "3111234568"], numero_aviones:5, pais_perteneciente: "Mexico", permiso_internacional:"sí"})
#Continental
CREATE (ec1:Empresa&Continental {rfc:"RFCCONT11111", nombre:"Empresa Continental Uno", nacionalidad:"Mexicana", direccion_sede:"Direccion de la sede principal", telefonos:["3111234567", "3111234568"], numero_aviones:5, continente_perteneciente: "America", paises_sobre_los_que_opera:["pais uno", "pais dos", "pais tres"]})
#Internacional
CREATE (ec1:Empresa&Internacional {rfc:"RFCINT11111", nombre:"Empresa Internacional Uno", nacionalidad:"Mexicana", direccion_sede:"Direccion de la sede principal", telefonos:["3111234567", "3111234568"], numero_aviones:5, paises_no_puede_operar:["pais uno", "pais dos", "pais tres"]})

#----Crear Personal---
CREATE (p:Personal {id_personal:"VI111111", nacionalidad:"mexicana", pais_residencia:"Mexico", nombre1:"Juan", nombre2:"Arnoldo", direccion:"Direccion de Juan", lengua_materna: "Español"})

#---Crear Avión----
CREATE (a1:Avion {id_avion:"B780-D", modelo:"Modelo Avion", millas_autonomia:6000, numero_pasajeros:70, numero_integrantes_tripulacion:10, utlima_revision:date("2019-09-30"))

#---Crear Ruta---
CREATE (r1:Ruta {codigo:"r-001", origen:id_aeropuerto, destino:id_aeropuerto, duracion:duration({minutes: 1.5, seconds: 1}, escala:[id_aeropuerto, id_aeropuerto]})
```

## ENDPOINTS

### GET

- Obtener la lista de aeropuertos con más de n pistas

**Consulta en Cypher**

```bash
MATCH (n:Aeropuerto) WHERE n.numero_de_pistas > $minPistas RETURN n.nombre
```

**Endpoint en la aplicación**

```bash
http://localhost:3000/aeropuerto/pistas/:minPistas
```

- Obtener la lista de empresas que trabajan en un aeropuerto específico

**Consulta en Cypher**

```bash
MATCH (n:Empresa)-[r:OPERA]->(m:Aeropuerto) 
WHERE m.id_aeropuerto = $idAeropuerto 
RETURN n.nombre
```

**Endopoint en la aplicación**

```bash
http://localhost:3000/empresa/operan_en/:id_aeropuerto
```

- Obtener la lista de paises en los que una empresa internacional no puede operar

**Consulta en Cypher**

```bash
MATCH (n:Internacional) 
WHERE n.rfc= $rfc 
RETURN n.paises_no_puede_operar
```

**Endpoint en la aplicación**

```bash
http://localhost:3000/empresa/internacional/paises_no_opera/:rfc
```

- Obtener las empresas que tiene más de 10 aviones y que trabajan en al menos dos aeropuertos diferentes

**Consulta en Cypher**

```bash
MATCH (n:Empresa)-[:OPERA]->(m:Aeropuerto)
WHERE n.numero_aviones > 10
WITH n, COUNT(DISTINCT m) AS numAeropuertos
WHERE numAeropuertos >= 2
RETURN n.nombre
```

**Endpoint en la aplicación**

```bash
http://localhost:3000/empresa/diezoMasAviones/dosoMasAeropuertos
```

- Obtener la lista de aviones con una autonomía de vuelo mayor a n millas

**Consulta en Cypher**

```bash
MATCH (n:Avion) 
WHERE n.millas_autonomia > $minAutonomia 
RETURN n
```

**Endpoint en la aplicación**

```bash
http://localhost:3000/avion/autonomia/:minAutonomia 
```

- Obtener la lista de pilotos que tienen licencia para volar una ruta específica

**Consulta en Cypher**

```bash
MATCH(n:Personal)-[:ASIGNADA_PILOTO]->(m:Ruta) 
WHERE m.codigo =  $codigo 
RETURN n.nombre1, n.nombre2
```

**Endpoint en la aplicación**

```bash
http://localhost:3000/personal/piloto/ruta/:codigo 
```

### POST

- Crear un nuevo personal de apoyo y asignarlo a una empresa

**Consulta en Cypher** 

```bash
CREATE (p:Personal {
                    id_personal:$id_personal,
                    nacionalidad:$nacionalidad,
                    pais_residencia:$pais_residencia, 
                    nombre1:$nombre1, 
                    nombre2:$nombre2, 
                    direccion:$direccion,
                    lengua_materna: $lengua_materna
                   })
        WITH p
        MATCH (e: Empresa ) WHERE e.rfc=$empresa_rfc
        CREATE (e)<-[:APOYO {idiomas_habla:$idiomas_habla, numero_telefono:$telefono}]-(p)
        RETURN p
```

**Endpoint en la aplicación**

```bash
http://localhost:3000/personal/nuevo/apoyo
	{
            "id_personal":"idDePrueba",
            "nacionalidad":"Iraní",
            "pais_residencia":"Seul",
            "nombre1":"Iraní",
            "nombre2":"Iraní",
            "direccion":"una dirección de prueba",
            "lengua_materna":"No sé",
            "empresa_rfc":"RFCNAC11111",
            "idiomas_habla":["Tampocosé, menossé"],
            "telefono":"3111231212"
  }
```

- Crear un nuevo avión y asignarlo a una empresa

**Consulta en Cypher**

```bash
CREATE 
	    (a:Avion {
		            id_avion:$id_avion,
		            modelo:$modelo,
		            millas_autonomia:$millas_autonomia,
		            numero_pasajeros:$numero_pasajeros,
		          numero_integrantes_tripulacion:$numero_integrantes_tripulacion, 
		            utlima_revision:date($ultima_revision)
            })
        WITH a
        MATCH (e: Empresa {rfc:$rfc_empresa})
        CREATE (e)-[:PROPIEDAD]->(a)
        RETURN a
```

**Endpoint en la aplicación**

```bash
http://localhost:3000/avion/nuevo
  {
           "id_avion":"idPrueba", 
           "modelo":"modeloPrueba", 
           "millas_autonomia":20000, 
           "numero_pasajeros":300,
           "numero_integrantes_tripulacion":10,
           "ultima_revision":"2024-09-30",
           "rfc_empresa":"RFCNAC11111"
  }
```

### PUT

- Actualizar el número de pistas de un aeropuerto

**Consulta en Cypher**

```bash
MATCH (a:Aeropuerto {id_aeropuerto:$id_aeropuerto}) SET a.numero_de_pistas= $pistas RETURN a
```

**Endpoint en la aplicación**

```bash
http://localhost:3000/aeropuerto/actualizarPistas/:id_aeropuerto
		{
        "pistas":10
     }
```

- Actualizar la dirección de un personal

**Consulta en Cypher**

```bash
MATCH (p:Personal{id_personal:$id_personal}) SET p.direccion = $direccion RETURN p.direccion
```

**Endpoint en la aplicación**

```bash
http://localhost:3000/personal/nuevaDireccion
        {
          "id_personal":"VI99999",
          "direccion":"Nuevaaaa"   
        }
```

### DELETE

- Eliminar a todos los pilotos de una empresa

**Consulta en Cypher**

```bash
MATCH (e:Empresa)<-[r:PILOTO]-(p:Personal)
WHERE e.rfc = $rfc_empresa
DELETE r
RETURN p.nombre1
```

**Endpoint en la aplicación**

```bash
http://localhost:3000/empresa/bajaPilotos/:rfc_empresa
```

- Eliminar una empresa que ya no trabaja en un aeropuerto específico y la información asociada

**Consulta en Cypher**

```bash
MATCH (e:Empresa)-[r:OPERA]->(a:Aeropuerto) 
WHERE a.id_aeropuerto=$id_aeropuerto 
AND e.rfc=$rfc_empresa
DELETE r
RETURN e.nombre AS empresaNombre, a.nombre AS aeropuertoNombre
```

**Endpoint en la aplicación**

```bash
http://localhost:3000/empresa/relacionAeropuerto/
				{
            "id_aeropuerto":66666,
            "rfc_empresa":"RFCINT22222"
        }
```
