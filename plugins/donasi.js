let handler = async m => m.reply(`
β­βγ π¦πππΆπ²π²π² γ
β β’ πππ¦πππ [paypal.me/smonterroza12]
β β’ Pero con que me sigas en instagram me basta:)
β https://www.instagram.com/susana_monterroza_/
β°ββββ
β­βγ Mi nΓΊmero por si quieres que agregue el bot a un grupo γ
β > Wa.me/4917243333338
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi α΄Ύα΅Κ³ Λ’αΆ¦ α«α΅αΆ¦α΅Κ³α΅Λ’ αΆ¦βΏαΆ α΅Κ³α΅α΅αΆαΆ¦α΅βΏ α΅α΅Λ‘ α΅α΅α΅']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
