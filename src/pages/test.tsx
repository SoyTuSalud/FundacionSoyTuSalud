import React from 'react'
import md5 from 'md5'
import crypto from 'crypto'

const price = "20000"
const apiKey = process.env.NEXT_PUBLIC_API_KEY_PAYU || "4Vj8eK4rloUd272L48hsrarnUA"
const merchantId = process.env.NEXT_PUBLIC_MERCHANT_ID_PAYU || "508029"
const reference = crypto.randomBytes(16).toString("hex");
const accountId = process.env.NEXT_PUBLIC_ACCOUNT_ID_PAYU || "512321"
const urlPayU = process.env.NEXT_PUBLIC_PAYU_URL || "https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu/"
const responseUrl = process.env.ENV_FRONT_CALL || process.env.NEXT_PUBLIC_FRONT_CALL


const Test = () => {
    return (
        <div>
            <form method="post" action={urlPayU}>
                <input name="merchantId"      type="hidden"  value={merchantId}  />
                <input name="accountId"       type="hidden"  value={accountId} />
                <input name="description"     type="hidden"  value="Test Soy Tu SALUD"  />
                <input name="referenceCode"   type="hidden"  value={`test_SoyTu_${reference}`} />
                <input name="amount"          type="hidden"  value={price}/>
                <input name="tax"             type="hidden"  value="0"  />
                <input name="taxReturnBase"   type="hidden"  value="0" />
                <input name="currency"        type="hidden"  value="COP" />
                <input name="signature"       type="hidden"  value={md5(`${apiKey}~${merchantId}~test_SoyTu_${reference}~${price}~COP`)} />
                <input name="test"            type="hidden"  value="0" />
                <input name="buyerEmail"      type="hidden"  value="test@test.com" />
                <input name="responseUrl"     type="hidden"  value={responseUrl} />
                <input name="confirmationUrl" type="hidden"  value={`${responseUrl}/api/v1/confirmation`}/>
                <input name="Submit"          type="submit"  value="Enviar"/>
            </form>
        </div>
    )
}

export default Test