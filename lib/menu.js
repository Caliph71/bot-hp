exports.menu = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) => {
	return `╰╼❥🍁 -----[ *MENU ${BotName}* ]----- 🍁
╿
╰╼❥Hi, *${id.split("@s.whatsapp.net")[0]}* 👋️
╰╼❥Berikut adalah beberapa fitur yang ada pada bot ini!🔪
╿
╿
╰╼❥⚠️ *${tampilTanggal}*
╰╼❥⚠️ *${tampilWaktu}*
╿
╿
╰╼❥ 🌹 *Command* 📋:
╿
╰╼❥ _#sticker_
╿
╰╼❥ _#nulis_
╿
╰╼❥ _#pantun_
╿
╰╼❥ _#animepict_
╿
╰╼❥ _#quotes_
╿
╰╼❥ _#pict_
╿
╰╼❥ _#say_
╿
╰╼❥ _#lirik_
╿
╰╼❥ _#alay_
╿
╰╼❥ 🌹 *Islam* 📖 :
╿
╰╼❥ _#sholat_
╿
╰╼❥ _#quran_
╿
╰╼❥ 🌹 *Download* 💾 :
╿
╰╼❥ _#yt_
╿
╰╼❥ _#ytmp3_
╿
╰╼❥ _#ig_
╿
╰╼❥ _#fb [ error ]_
╿
╰╼❥ _#twt_
╿
╰╼❥ _#tiktok_
╿
╰╼❥ 🌹 *Edukasi* 💻 :
╿
╰╼❥ _#wiki_
╿
╰╼❥ _#covid_
╿
╰╼❥ 🌹 *Primbon* 💬
╿
╰╼❥ _#nama_
╿
╰╼❥ _#pasangan_
╿
╿
╿
╿ 
╿
╿
╿
╰╼❥♻️ JANGAN  LUPA DONASI AGAR BOT AKTIF TERUS!
╰╼❥♻️ MAU DONASI? SILAHKAN KETIK #donate
╿
╰╼❥📺 *Iklan* : JANGAN LUPA COLAY 2 KALI SEHARI👻
╿
╰╼❥📸KALO COLAY JANGAN LUPA DI REKAM
╿
╰╼❥⚠️ INFORMASI COVID-19 TERBARU!
╿
╰╼❥⚠️ POSITIF: *${corohelp.confirmed.value}*
╰╼❥⚠️ SEMBUH: *${corohelp.recovered.value}*
╰╼❥⚠️ MENINGGAL: *${corohelp.deaths.value}*
╰╼❥⚠️ UPDATE: *${corohelp.lastUpdate}*
╿
╰╼❥♻️ _TETAP JAGA KESEHATAN DAN SELALU PAKAI MASKER!_
╿
╰╼❥♻️ Mau pasang iklan di *${BotName} ?*
╰╼❥☎️ WA : *${whatsapplu}*
╿
╰╼❥⚠️ Gunakan dengan bijak ‼️
╰╼❥⚠️ Bot ini berjalan ${kapanbotaktif} ‼️
╿
╰╼❥✳️ Official Grub [1] : ${grupch1}
╿
╰╼❥✳️ Official Grub [2] : ${grupch2}

  
🔰 -----[ *POWERED BY ${BotName}* ]----- 🔰`
}
