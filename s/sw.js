// حتى كروم يقبل يثبّت الصفحة كتطبيق (ويطلع بقائمة المشاركة). ما نخزن شي، كلشي من النت.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () {});
