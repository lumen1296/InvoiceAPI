import joi from 'joi'

export const asignacionMedioRequestSchema = joi
  .object()
  .keys({
    cuentaSeleccionada: joi
      .object()
      .optional()
      .keys({
        codigoProducto: joi.string().required(),
        codigoSubProducto: joi.string().required(),
        numero: joi.string().required(),
      }),
    declaraciones: joi.alternatives().when('esCliente', {
      is: false,
      otherwise: joi.optional(),
      then: joi.object().keys({
        investigacionJuridicaAdministrativa: joi.string().required(),
        mediosActividades: joi.string().required(),
      }),
    }),
    direccion: joi
      .object()
      .keys({
        codigoCiudad: joi.string().required(),
        codigoDepartamento: joi.string().required(),
        codigoPais: joi.string().required(),
        direccion: joi.string().required(),
        nombreCiudad: joi
          .string()
          .allow('')
          .optional(),
        nombreDepartamento: joi
          .string()
          .allow('')
          .optional(),
        nombrePais: joi
          .string()
          .allow('')
          .optional(),
      })
      .required(),
    direccionFacturacion: joi
      .object()
      .keys({
        codigoCiudad: joi.string().required(),
        codigoDepartamento: joi.string().required(),
        codigoPais: joi.string().required(),
        direccion: joi.string().required(),
        nombreCiudad: joi
          .string()
          .allow('')
          .optional(),
        nombreDepartamento: joi
          .string()
          .allow('')
          .optional(),
        nombrePais: joi
          .string()
          .allow('')
          .optional(),
      })
      .required(),
    direccionOficina: joi.alternatives().when('esCliente', {
      is: false,
      otherwise: joi.optional(),
      then: joi.object().keys({
        codigoCiudad: joi
          .string()
          .allow('')
          .optional(),
        codigoDepartamento: joi
          .string()
          .allow('')
          .optional(),
        direccion: joi
          .string()
          .allow('')
          .optional(),
        nombreCiudad: joi
          .string()
          .allow('')
          .optional(),
        nombreDepartamento: joi
          .string()
          .allow('')
          .optional(),
      }),
    }),
    documento: joi
      .object()
      .keys({
        direccionExpedicion: joi
          .object()
          .keys({
            codigoCiudad: joi.string().required(),
            codigoDepartamento: joi.string().required(),
            codigoPais: joi.string().required(),
            fecha: joi.string().required(),
          })
          .required(),
        numero: joi.string().required(),
        tipo: joi.string().required(),
      })
      .required(),
    email: joi.string().required(),
    esCliente: joi.boolean().required(),
    esPep: joi.alternatives().when('esCliente', {
      is: false,
      otherwise: joi.boolean().optional(),
      then: joi.boolean().required(),
    }),
    estatusFacta: joi.alternatives().when('esCliente', {
      is: false,
      otherwise: joi.boolean().optional(),
      then: joi.boolean().required(),
    }),
    financiera: joi.alternatives().when('esCliente', {
      is: false,
      otherwise: joi.optional(),
      then: joi.object().keys({
        ingreso: joi.string().required(),
        origenIngresos: joi.alternatives().when('otraFuenteIngresos', {
          is: true,
          otherwise: joi.optional(),
          then: joi.string().required(),
        }),
        otraFuenteIngresos: joi.boolean().required(),
        totalBienes: joi.string().required(),
        totalDeudas: joi.string().required(),
        totalGastosMensuales: joi.string().required(),
        totalIngresos: joi.alternatives().when('otraFuenteIngresos', {
          is: true,
          otherwise: joi.optional(),
          then: joi.string().required(),
        }),
        transaccionInternacional: joi.object().keys({
          beneficiario: joi.alternatives().when('estatus', {
            is: true,
            otherwise: joi
              .string()
              .allow('')
              .optional(),
            then: joi
              .string()
              .allow('')
              .required(),
          }),
          codigoCiudad: joi.alternatives().when('estatus', {
            is: true,
            otherwise: joi
              .string()
              .allow('')
              .optional(),
            then: joi.string().required(),
          }),
          codigoMonedaCuenta: joi.alternatives().when('estatus', {
            is: true,
            otherwise: joi
              .string()
              .allow('')
              .optional(),
            then: joi.string().required(),
          }),
          codigoPais: joi.alternatives().when('estatus', {
            is: true,
            otherwise: joi
              .string()
              .allow('')
              .optional(),
            then: joi.string().required(),
          }),
          estatus: joi.boolean().required(),
          monedaCuenta: joi.alternatives().when('estatus', {
            is: true,
            otherwise: joi
              .string()
              .allow('')
              .optional(),
            then: joi.string().required(),
          }),
          montoOperacion: joi.alternatives().when('estatus', {
            is: true,
            otherwise: joi
              .string()
              .allow('')
              .optional(),
            then: joi.string().required(),
          }),
          nombreBanco: joi.alternatives().when('estatus', {
            is: true,
            otherwise: joi
              .string()
              .allow('')
              .optional(),
            then: joi.string().required(),
          }),
          nombreCiudad: joi.alternatives().when('estatus', {
            is: true,
            otherwise: joi
              .string()
              .allow('')
              .optional(),
            then: joi.string().required(),
          }),
          nombrePais: joi.alternatives().when('estatus', {
            is: true,
            otherwise: joi
              .string()
              .allow('')
              .optional(),
            then: joi.string().required(),
          }),
          numeroCuenta: joi.alternatives().when('estatus', {
            is: true,
            otherwise: joi
              .string()
              .allow('')
              .optional(),
            then: joi.string().required(),
          }),
          tipoOperacion: joi.alternatives().when('estatus', {
            is: true,
            otherwise: joi.array().optional(),
            then: joi.array().required(),
          }),
        }),
      }),
    }),
    genero: joi.string().required(),
    idProceso: joi
      .string()
      .optional()
      .allow(''),
    ip: joi.string().required(),
    laboral: joi.alternatives().when('esCliente', {
      is: false,
      otherwise: joi.optional(),
      then: joi.object().keys({
        actividadEconomica: joi.alternatives().when('actividadLaboral', {
          is: 'I',
          otherwise: joi
            .string()
            .allow('')
            .optional(),
          then: joi.string().required(),
        }),
        actividadEconomicaNombre: joi
          .string()
          .allow('')
          .optional(),
        nombreEmpresa: joi
          .string()
          .allow('')
          .optional(),
        personaNaturalNegocio: joi.boolean().required(),
      }),
    }),
    montoAprobado: joi.string().required(),
    nacimiento: joi
      .object()
      .keys({
        codigoPais: joi.string().optional(),
        fecha: joi.string().required(),
        lugar: joi.string().required(),
        nombrePais: joi.string().optional(),
      })
      .required(),
    nombre: joi
      .object()
      .keys({
        primerApellido: joi.string().required(),
        primerNombre: joi.string().required(),
        segundoApellido: joi
          .string()
          .optional()
          .allow(''),
        segundoNombre: joi
          .string()
          .optional()
          .allow(''),
      })
      .required(),
    otp: joi
      .object()
      .keys({
        fechaHoraOtp: joi
          .string()
          .allow('')
          .required(),
        numeroOtp: joi
          .string()
          .allow('')
          .required(),
      })
      .required(),
    parms: joi
      .object()
      .keys({
        ctx: joi.object().required(),
        default: joi.object().required(),
        services: joi.object().required(),
      })
      .required(),
    preAnalisis: joi
      .object()
      .keys({
        actividadLaboral: joi.string().required(),
        codigoAsesor: joi.string().allow(''),
        ingreso: joi
          .object()
          .keys({
            ingresosEmpleado: joi.string().allow(''),
            ingresosIndependiente: joi.string().allow(''),
            ingresosPensionado: joi.string().allow(''),
          })
          .required(),
        numeroSolicitud: joi.string().required(),
        tipoContrato: joi
          .number()
          .integer()
          .required(),
      })
      .required(),
    profesion: joi.string().required(),
    telefono: joi
      .object()
      .keys({
        numeroCelular: joi.string().required(),
        numeroFijo: joi
          .string()
          .allow('')
          .required(),
        numeroOficina: joi.alternatives().when('esCliente', {
          is: false,
          otherwise: joi
            .string()
            .allow('')
            .optional(),
          then: joi.string().required(),
        }),
      })
      .required(),
    tributaria: joi.alternatives().when('esCliente', {
      is: false,
      otherwise: joi.optional(),
      then: joi.object().keys({
        clasificacion: joi.alternatives().when('estatusFacta', {
          is: true,
          otherwise: joi
            .string()
            .allow('')
            .optional(),
          then: joi.string().required(),
        }),
        clasificacionFederal: joi.alternatives().when('estatusFacta', {
          is: true,
          otherwise: joi
            .string()
            .allow('')
            .optional(),
          then: joi.string().required(),
        }),
        codigoCiudad: joi.alternatives().when('estatusFacta', {
          is: true,
          otherwise: joi
            .string()
            .allow('')
            .optional(),
          then: joi.string().required(),
        }),
        codigoPais: joi.alternatives().when('residenciaFiscal', {
          is: true,
          otherwise: joi
            .string()
            .allow('')
            .optional(),
          then: joi.string().required(),
        }),
        codigoPostal: joi.alternatives().when('estatusFacta', {
          is: true,
          otherwise: joi
            .string()
            .allow('')
            .optional(),
          then: joi.string().optional(),
        }),
        descripcion: joi.alternatives().when('estatusFacta', {
          is: true,
          otherwise: joi
            .string()
            .allow('')
            .optional(),
          then: joi.string().required(),
        }),
        direccion: joi.alternatives().when('estatusFacta', {
          is: true,
          otherwise: joi
            .string()
            .allow('')
            .optional(),
          then: joi.string().required(),
        }),
        idFiscal: joi.alternatives().when('residenciaFiscal', {
          is: true,
          otherwise: joi
            .string()
            .allow('')
            .optional(),
          then: joi.string().required(),
        }),
        nombreCiudad: joi.alternatives().when('estatusFacta', {
          is: true,
          otherwise: joi
            .string()
            .allow('')
            .optional(),
          then: joi.string().required(),
        }),
        nombreFacta: joi.alternatives().when('estatusFacta', {
          is: true,
          otherwise: joi
            .string()
            .allow('')
            .optional(),
          then: joi.string().required(),
        }),
        nombrePais: joi.alternatives().when('residenciaFiscal', {
          is: true,
          otherwise: joi
            .string()
            .allow('')
            .optional(),
          then: joi.string().required(),
        }),
        residenciaFiscal: joi.boolean().required(),
        tin: joi.alternatives().when('estatusFacta', {
          is: true,
          otherwise: joi
            .string()
            .allow('')
            .optional(),
          then: joi.string().required(),
        }),
      }),
    }),
  })
  .required()

export const asignacionMedioAPIRequestSchema = joi
  .object()
  .keys({
    cuentaSeleccionada: joi
      .object()
      .optional()
      .keys({
        codigoProducto: joi.string().required(),
        codigoSubProducto: joi.string().required(),
        numero: joi.string().required(),
      }),
    declaraciones: joi.alternatives().when('esCliente', {
      is: false,
      otherwise: joi.optional(),
      then: joi.object().keys({
        investigacionJuridicaAdministrativa: joi.string().required(),
        mediosActividades: joi.string().required(),
      }),
    }),
    direccion: joi
      .object()
      .keys({
        codigoCiudad: joi.string().required(),
        codigoDepartamento: joi.string().required(),
        codigoPais: joi.string().required(),
        direccion: joi.string().required(),
        nombreCiudad: joi
          .string()
          .allow('')
          .optional(),
        nombreDepartamento: joi
          .string()
          .allow('')
          .optional(),
        nombrePais: joi
          .string()
          .allow('')
          .optional(),
      })
      .required(),
    direccionFacturacion: joi
      .object()
      .keys({
        codigoCiudad: joi.string().required(),
        codigoDepartamento: joi.string().required(),
        codigoPais: joi.string().required(),
        direccion: joi.string().required(),
        nombreCiudad: joi
          .string()
          .allow('')
          .optional(),
        nombreDepartamento: joi
          .string()
          .allow('')
          .optional(),
        nombrePais: joi
          .string()
          .allow('')
          .optional(),
      })
      .required(),
    direccionOficina: joi.alternatives().when('esCliente', {
      is: false,
      otherwise: joi.optional(),
      then: joi.object().keys({
        codigoCiudad: joi
          .string()
          .allow('')
          .optional(),
        codigoDepartamento: joi
          .string()
          .allow('')
          .optional(),
        direccion: joi
          .string()
          .allow('')
          .optional(),
        nombreCiudad: joi
          .string()
          .allow('')
          .optional(),
        nombreDepartamento: joi
          .string()
          .allow('')
          .optional(),
      }),
    }),
    documento: joi
      .object()
      .keys({
        direccionExpedicion: joi
          .object()
          .keys({
            codigoCiudad: joi.string().required(),
            codigoDepartamento: joi.string().required(),
            codigoPais: joi.string().required(),
            fecha: joi.string().required(),
          })
          .required(),
        numero: joi.string().required(),
        tipo: joi.string().required(),
      })
      .required(),
    email: joi.string().required(),
    esCliente: joi.boolean().required(),
    esPep: joi.alternatives().when('esCliente', {
      is: false,
      otherwise: joi.boolean().optional(),
      then: joi.boolean().required(),
    }),
    estatusFacta: joi.alternatives().when('esCliente', {
      is: false,
      otherwise: joi.boolean().optional(),
      then: joi.boolean().required(),
    }),
    financiera: joi.alternatives().when('esCliente', {
      is: false,
      otherwise: joi.optional(),
      then: joi.object().keys({
        ingreso: joi.string().required(),
        origenIngresos: joi.alternatives().when('otraFuenteIngresos', {
          is: true,
          otherwise: joi.optional(),
          then: joi.string().required(),
        }),
        otraFuenteIngresos: joi.boolean().required(),
        totalBienes: joi.string().required(),
        totalDeudas: joi.string().required(),
        totalGastosMensuales: joi.string().required(),
        totalIngresos: joi.alternatives().when('otraFuenteIngresos', {
          is: true,
          otherwise: joi.optional(),
          then: joi.string().required(),
        }),
        transaccionInternacional: joi.object().keys({
          beneficiario: joi.alternatives().when('estatus', {
            is: true,
            otherwise: joi
              .string()
              .allow('')
              .optional(),
            then: joi
              .string()
              .allow('')
              .required(),
          }),
          codigoCiudad: joi.alternatives().when('estatus', {
            is: true,
            otherwise: joi
              .string()
              .allow('')
              .optional(),
            then: joi.string().required(),
          }),
          codigoMonedaCuenta: joi.alternatives().when('estatus', {
            is: true,
            otherwise: joi
              .string()
              .allow('')
              .optional(),
            then: joi.string().required(),
          }),
          codigoPais: joi.alternatives().when('estatus', {
            is: true,
            otherwise: joi
              .string()
              .allow('')
              .optional(),
            then: joi.string().required(),
          }),
          estatus: joi.boolean().required(),
          monedaCuenta: joi.alternatives().when('estatus', {
            is: true,
            otherwise: joi
              .string()
              .allow('')
              .optional(),
            then: joi.string().required(),
          }),
          montoOperacion: joi.alternatives().when('estatus', {
            is: true,
            otherwise: joi
              .string()
              .allow('')
              .optional(),
            then: joi.string().required(),
          }),
          nombreBanco: joi.alternatives().when('estatus', {
            is: true,
            otherwise: joi
              .string()
              .allow('')
              .optional(),
            then: joi.string().required(),
          }),
          nombreCiudad: joi.alternatives().when('estatus', {
            is: true,
            otherwise: joi
              .string()
              .allow('')
              .optional(),
            then: joi.string().required(),
          }),
          nombrePais: joi.alternatives().when('estatus', {
            is: true,
            otherwise: joi
              .string()
              .allow('')
              .optional(),
            then: joi.string().required(),
          }),
          numeroCuenta: joi.alternatives().when('estatus', {
            is: true,
            otherwise: joi
              .string()
              .allow('')
              .optional(),
            then: joi.string().required(),
          }),
          tipoOperacion: joi.alternatives().when('estatus', {
            is: true,
            otherwise: joi.array().optional(),
            then: joi.array().required(),
          }),
        }),
      }),
    }),
    genero: joi.string().required(),
    idProceso: joi
      .string()
      .optional()
      .allow(''),
    ip: joi.string().required(),
    laboral: joi.alternatives().when('esCliente', {
      is: false,
      otherwise: joi.optional(),
      then: joi.object().keys({
        actividadEconomica: joi.alternatives().when('actividadLaboral', {
          is: 'I',
          otherwise: joi
            .string()
            .allow('')
            .optional(),
          then: joi.string().required(),
        }),
        actividadEconomicaNombre: joi
          .string()
          .allow('')
          .optional(),
        nombreEmpresa: joi
          .string()
          .allow('')
          .optional(),
        personaNaturalNegocio: joi.boolean().required(),
      }),
    }),
    montoAprobado: joi.string().required(),
    nacimiento: joi
      .object()
      .keys({
        codigoPais: joi.string().optional(),
        fecha: joi.string().required(),
        lugar: joi.string().required(),
        nombrePais: joi.string().optional(),
      })
      .required(),
    nombre: joi
      .object()
      .keys({
        primerApellido: joi.string().required(),
        primerNombre: joi.string().required(),
        segundoApellido: joi
          .string()
          .optional()
          .allow(''),
        segundoNombre: joi
          .string()
          .optional()
          .allow(''),
      })
      .required(),
    otp: joi
      .object()
      .keys({
        fechaHoraOtp: joi
          .string()
          .allow('')
          .required(),
        numeroOtp: joi
          .string()
          .allow('')
          .required(),
      })
      .required(),
    preAnalisis: joi
      .object()
      .keys({
        actividadLaboral: joi.string().required(),
        codigoAsesor: joi.string().allow(''),
        ingreso: joi
          .object()
          .keys({
            ingresosEmpleado: joi.string().allow(''),
            ingresosIndependiente: joi.string().allow(''),
            ingresosPensionado: joi.string().allow(''),
          })
          .required(),
        numeroSolicitud: joi.string().required(),
        tipoContrato: joi
          .number()
          .integer()
          .required(),
      })
      .required(),
    presentacionCliente: joi
      .object()
      .keys({
        consumer: joi.object().required(),
        kind: joi.object().required(),
        module: joi.object().required(),
        partner: joi.object().required(),
      })
      .required(),
    profesion: joi.string().required(),
    telefono: joi
      .object()
      .keys({
        numeroCelular: joi.string().required(),
        numeroFijo: joi
          .string()
          .allow('')
          .required(),
        numeroOficina: joi.alternatives().when('esCliente', {
          is: false,
          otherwise: joi
            .string()
            .allow('')
            .optional(),
          then: joi.string().required(),
        }),
      })
      .required(),
    tributaria: joi.alternatives().when('esCliente', {
      is: false,
      otherwise: joi.optional(),
      then: joi.object().keys({
        clasificacion: joi.alternatives().when('estatusFacta', {
          is: true,
          otherwise: joi
            .string()
            .allow('')
            .optional(),
          then: joi.string().required(),
        }),
        clasificacionFederal: joi.alternatives().when('estatusFacta', {
          is: true,
          otherwise: joi
            .string()
            .allow('')
            .optional(),
          then: joi.string().required(),
        }),
        codigoCiudad: joi.alternatives().when('estatusFacta', {
          is: true,
          otherwise: joi
            .string()
            .allow('')
            .optional(),
          then: joi.string().required(),
        }),
        codigoPais: joi.alternatives().when('residenciaFiscal', {
          is: true,
          otherwise: joi
            .string()
            .allow('')
            .optional(),
          then: joi.string().required(),
        }),
        codigoPostal: joi.alternatives().when('estatusFacta', {
          is: true,
          otherwise: joi
            .string()
            .allow('')
            .optional(),
          then: joi.string().optional(),
        }),
        descripcion: joi.alternatives().when('estatusFacta', {
          is: true,
          otherwise: joi
            .string()
            .allow('')
            .optional(),
          then: joi.string().required(),
        }),
        direccion: joi.alternatives().when('estatusFacta', {
          is: true,
          otherwise: joi
            .string()
            .allow('')
            .optional(),
          then: joi.string().required(),
        }),
        idFiscal: joi.alternatives().when('residenciaFiscal', {
          is: true,
          otherwise: joi
            .string()
            .allow('')
            .optional(),
          then: joi.string().required(),
        }),
        nombreCiudad: joi.alternatives().when('estatusFacta', {
          is: true,
          otherwise: joi
            .string()
            .allow('')
            .optional(),
          then: joi.string().required(),
        }),
        nombreFacta: joi.alternatives().when('estatusFacta', {
          is: true,
          otherwise: joi
            .string()
            .allow('')
            .optional(),
          then: joi.string().required(),
        }),
        nombrePais: joi.alternatives().when('residenciaFiscal', {
          is: true,
          otherwise: joi
            .string()
            .allow('')
            .optional(),
          then: joi.string().required(),
        }),
        residenciaFiscal: joi.boolean().required(),
        tin: joi.alternatives().when('estatusFacta', {
          is: true,
          otherwise: joi
            .string()
            .allow('')
            .optional(),
          then: joi.string().required(),
        }),
      }),
    }),
  })
  .required()
