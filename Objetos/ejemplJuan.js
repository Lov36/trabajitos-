class CuentaBanco {
    constructor(numeroCuenta, titular, saldo) {
      this._numeroCuenta = numeroCuenta
      this._titular = titular
      this._saldo = saldo
    }
  
    set numeroCuenta(numeroCuenta) {
      this._numeroCuenta = numeroCuenta;
    }
    set titular(titular) {
      this._titular = titular;
    }
    set saldo(saldo) {
        this._saldo = saldo;

    }
  
    get numeroCuenta() {
      return this._numeroCuenta;
    }
    get titular() {
      return this._titular;
    }
  
   get saldo() {
    return this._saldo;

   }
  

  }
  
  //CuentaAhorros
  const fig = new CuentaBanco();
  console.log(typeof fig);
  
  class CuentaAhorros extends CuentaBanco {
    constructor(numeroCuenta, titular, saldo, beneficio) {
      super(numeroCuenta, titular, saldo);
      this._beneficio = beneficio;
    }
    set beneficio(beneficio) {
      this._beneficio = beneficio;
    }
  
    get beneficio() {
      return this._beneficio;
    }

    cobroBeneficio() {
        var cobro= this._saldo * this._beneficio/100;
        return cobro+ this._saldo;
    }
  }


  
  const tri = new CuentaAhorros(111222333, "Pedro pica piedra", 100000, 9);
  console.log(`numeroCuenta ${tri.numeroCuenta}`);
  console.log(`titular ${tri.titular}`);
  console.log(`saldo ${tri.saldo}`);
  console.log(`beneficio ${tri.beneficio}%`);
  console.log(`Total ${tri.cobroBeneficio()}`);


  
  //CuentaCorriente
  
  const fig2 = new CuentaBanco();
  console.log(typeof fig2);
  
  class CuentaCorriente extends CuentaBanco {
    constructor(numeroCuenta, titular, saldo, credito, saldoTotal) {
      super(numeroCuenta, titular, saldo);
      this._credito = credito;
      this._saldoTotal = saldoTotal;
    }
    set credito(credito) {
      this._pretamo = credito;
    }
    set saldoTotal(saldoTotal) {
        this._saldoTotal = saldoTotal;

    }
  
    get credito() {
      return this._credito;
    }
    get saldoTotal() {
        return this._saldoTotal;
    }
    saldoTotalA(b, a) {
        this.credito =undefined 
        b = this.saldo;
        a = this.credito;
        
        if (this.credito == undefined) {
            return this.saldo
        } else {
            var prest = (b +a);
        }
        return prest;

      }
  }
  
  const cua = new CuentaCorriente(123456789, "Julian", 10,5);
  console.log(`numeroCuenta ${cua.numeroCuenta}`);
  console.log(`titular ${cua.titular}`);
  console.log(`saldo ${cua.saldo}`);
  console.log(`credito ${cua.credito}`);
  console.log(`Saldo total ${cua.saldoTotalA()}`);