exports.donate = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) => {
	return `🔰 -----[ *MENU DONASI ${BotName}* ]----- 🔰
  
Hi, *${id.split("@s.whatsapp.net")[0]}* 👋️
Mau donasi? ✨

⚠️ *${tampilTanggal}*
⚠️ *${tampilWaktu}*

♻ Silahkan donasi dibawah ini :
||
⚜ *OVO*: BELOM ADA!
⚜ *#DANA*: 082138746029
⚜ *#BANK*: BELOM ADA!
⚜ *#PULSA*: 082138746029
⚜ *#GOPAY*: 082138746029
⚜ *#SAWERIA*: GAK ADA!
||
📺 *Iklan* : JANGAN LUPA COLY 2 KALI SEHARI
||
📸 KALO COLY DI REKAM ANYING BIAR SERU!
||
⚠️ INFORMASI COVID-19 TERBARU!
||
⚠️ POSITIF: *${corohelp.confirmed.value}*
⚠️ SEMBUH: *${corohelp.recovered.value}*
⚠️ MENINGGAL: *${corohelp.deaths.value}*
⚠️ UPDATE: *${corohelp.lastUpdate}*
||
♻️ _TETAP JAGA KESEHATAN DAN SELALU PAKAI MASKER!_
||
♻️ Mau pasang iklan di *${BotName} ?*
☎️ WA : *${whatsapplu}*
||
⚠️ Gunakan dengan bijak ‼️
⚠️ Bot ini berjalan ${kapanbotaktif} ‼️
||
✳️ Official Grub [1] : ${grupch1}
||
✳️ Official Grub [2] : ${grupch2}

RakhA-BoT R3c1n9
  
🔰 -----[ *POWERED BY ${BotName}* ]----- 🔰`
}
