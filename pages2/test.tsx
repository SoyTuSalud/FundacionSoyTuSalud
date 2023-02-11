const Test = () => {

  return(
    <form method="post" action="https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu/">
      <input name="merchantId"      type="hidden"  value="987832"   />
      <input name="accountId"       type="hidden"  value="996144" />
      <input name="description"     type="hidden"  value="Test PAYU"  />
      <input name="referenceCode"   type="hidden"  value="TestPayU" />
      <input name="amount"          type="hidden"  value="20000"   />
      <input name="tax"             type="hidden"  value="3193"  />
      <input name="taxReturnBase"   type="hidden"  value="16806" />
      <input name="currency"        type="hidden"  value="COP" />
      <input name="signature"       type="hidden"  value="50664217d0da30a2a11c1392b0076742a4725cfa"  />
      <input name="test"            type="hidden"  value="0" />
      <input name="buyerEmail"      type="hidden"  value="test@test.com" />
      <input name="responseUrl"     type="hidden"  value="http://www.test.com/response" />
      <input name="confirmationUrl" type="hidden"  value="http://www.test.com/confirmation" />
      <input name="Submit"          type="submit"  value="Enviar" />
    </form>
  )
}

export default Test