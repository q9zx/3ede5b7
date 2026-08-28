# Dongle Metri.immo - URLs sin datos de contacto

## Objetivo

El Dongle es una herramienta privada del panel admin para generar enlaces cortos de propiedades sin exponer datos directos del asesor, captador o cerrador.

## Ruta privada

```txt
/admin/dongle
```

## Ruta publica generada

```txt
/v/[code]
```

Ejemplo:

```txt
https://www.metri.immo/v/1a2b3c?mode=no_contact&src=whatsapp
```

## Comportamiento

- El admin ingresa el codigo hex de la propiedad.
- El sistema valida que tenga 6 caracteres hexadecimales.
- El sistema genera una URL corta.
- La URL puede copiarse para WhatsApp, Instagram, email o campañas.
- La vista publica no muestra telefono privado, email privado ni datos internos.
- La solicitud se canaliza mediante formulario o contacto general de Metri.immo.

## Auditoria recomendada

Cada enlace generado debe registrarse en `share_links`:

- Propiedad.
- Codigo.
- Fuente.
- Modo.
- Usuario que lo genero.
- Fecha de creacion.

## Fases futuras

- QR automatico.
- Expiracion de enlaces.
- Conteo de clics.
- Fuente UTM avanzada.
- Enlaces por asesor.
- Analiticas de conversion.
