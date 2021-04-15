# a.
print("EJERCICIO A")
print("Hola Mundo");

# b.
print("EJERCICIO B")
nombre = input("Ingrese su nombre: ");
print("Hola", nombre);

# c.
print("EJERCICIO C")
numeroA = int(input("Ingrese un número: "));
numeroB = int(input("Ingrese un segundo número: "));
print();
print("La suma de", numeroA, "y", numeroB, "es", numeroA+numeroB);
print("La diferencia entre", numeroA, "y", numeroB, "es", abs(numeroA-numeroB));

# d.
print("EJERCICIO D")
numeroA = int(input("Ingrese un número: "));
numeroB = int(input("Ingrese un segundo número: "));
numeroC = int(input("Ingrese un tercer número: "));
suma = numeroA+numeroB+numeroC;
promedio = (numeroA+numeroB+numeroC) / 3;
print();
print("La suma de", numeroA, ",", numeroB, "y", numeroC, "es", suma);
print("El promedio", numeroA, ",", numeroB, "y", numeroC, "es", promedio);

# e.
print("EJERCICIO E")
numeroA = int(input("Ingrese el importe de su factura: "));
iva = (numeroA * 21) / 100;
print("El IVA es de", iva, ", el monto a pagar es de", numeroA+iva);