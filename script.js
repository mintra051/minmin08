/**
 * ฟังก์ชันสำหรับแยกเปิดหน้าต่างใหม่ (Pop-up หรือ Tab ใหม่) ไปยังหน้า Facebook ประชาสัมพันธ์
 * @param {string} pageType - ประเภทของเพจที่ต้องการเปิด ('main' หรือ 'quota')
 */
function openFacebookPage(pageType) {
    let url = "";

    if (pageType === 'main') {
        // ลิงก์เพจหลักแผนกคอมพิวเตอร์
        url = "https://facebook.com";
    } else if (pageType === 'quota') {
        // ลิงก์เพจประชาสัมพันธ์กิจกรรมและโควตา
        url = "https://facebook.com";
    }

    if (url !== "") {
        // ใช้ window.open เพื่อเปิดลิงก์แยกออกเป็นหน้าต่าง/แท็บใหม่โดยที่หน้าเว็บหลักวิทยาลัยไม่หายไป
        window.open(url, '_blank');
    }
}
