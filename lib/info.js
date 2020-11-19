exports.info = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) => {
	return `🔰 -----[ *MENU ${BotName}* ]----- 🔰
  
Hi, *${id.split("@s.whatsapp.net")[0]}* 👋️
Berikut adalah info pada bot ini!✨

⚠️ *${tampilTanggal}*
⚠️ *${tampilWaktu}*

♻ INFO BOT! :
||
⚜ *GITHUB*: https://github.com/Rakha21/bot-hp
⚜ *AUTHOR*: RAKHA MHDZZ
⚜ *DESIGNER*: RAKHA MHDZZ
⚜ *YOUTUBE*: RAKHA MHDZZ
⚜ *SCRIPT ORIGINAL BY*: GAK TAU:v
||
♻ INFO LAIN! :
||
OH IYA SCRIPT INI 100% GRATIS KOK.
SCRIPT DIBUAT DENGAN BAHASA PEMROGRAMAN NODE.JS
UPDATE BOT TERBARU DI YOUTUBE BINTANG NUR PRADANA
||
♻️ JANGAN  LUPA DONASI AGAR BOT AKTIF TERUS!
♻️ MAU DONASI? SILAHKAN KETIK #donate
||
📺 *Iklan* : JANGAN LUPA COLY 2 KALI SEHARI
||
📸 KALO COLY DI REKAM ANYING BIAR SERU
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
