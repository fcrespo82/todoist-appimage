# Based on the template from https://daveparrish.net/posts/2019-11-16-Better-AppImage-PKGBUILD-template.html
# Maintainer : Sergey Kostrukov <sergey at kostrukov dot com>
# Contributor : Tianrui Wei <archlinux_aur at mail dot tianrui-wei dot com>
# Contributor : Marcio Silva <marcionps at gmail dot com>

_pkgname=todoist

pkgname="${_pkgname}"-appimage
pkgver=9.26.4
pkgrel=2
pkgdesc="The to-do list to organize work & life."
arch=('x86_64')
url="https://todoist.com/"
license=('custom:Commercial')
depends=('zlib' 'fuse2' 'appimagelauncher')
makedepends=('appimagetool-bin' 'asar' 'npm')
options=('!strip' '!debug')
_appimage="${pkgname}-${pkgver}.AppImage"
source_x86_64=("${_appimage}::https://electron-dl.todoist.net/linux/Todoist-linux-${pkgver}-x86_64-latest.AppImage"
               "fix-desktop-file.patch"
               "fix-electron-js.patch"
               "trayIconDark.png")
noextract=("${_appimage}")
sha256sums_x86_64=('cf345453f64bc2805120b1441d2863cbc18ea70c3fb290d540cfc47a18d13706'
                   'e43423bf753ccaa8aad5e20a68d8f29ba1a0862e288af94cdbd795103d3098aa'
                   '2e3fbc0fabd27f60a4ba3da7839b32b39c8cf4863d79455856914c8206f059c5'
                   '4a637a2b54e01fc136da24d3d498524981e5c94f721e6dca6ebc4d1e98af4be5')

prepare() {
  chmod +x "${_appimage}"
  ./"${_appimage}" --appimage-extract
}

build() {
  # Fix permissions; .AppImage permissions are 700 for all directories
  chmod -R a-x+rX squashfs-root/usr

  # Extract asar to be able to patch it
  asar extract ${srcdir}/squashfs-root/resources/app.asar ${srcdir}/app.extracted

  # Create a version of the tray icon for using in light mode
  cp ${srcdir}/trayIconDark.png ${srcdir}/app.extracted/webpack/electron/resources/linux
  
  # Beautify electron.js
  # Patch it to enable deeplink functionality to todoist://openquickadd and todoist://ramble
  # Patch blocks:
  # - @@ -656,6 +656,9 @@
  # - @@ -3363,7 +3368,7 @@
  # - @@ -3620,7 +3625,7 @@
  #
  # And patch it to enable use of dark icon on light themes
  # Patch block:
  # @@ -1214,8 +1217,10 @@
  npx -y js-beautify ${srcdir}/app.extracted/webpack/electron/electron.js > electron.js.temp
  patch electron.js.temp < ${srcdir}/fix-electron-js.patch
  npx -y terser electron.js.temp -o ${srcdir}/app.extracted/webpack/electron/electron.js
  rm electron.js.temp

  # Patch todoist.desktop to add Quick Add and Ramble actions
  cp ${srcdir}/squashfs-root/todoist.desktop todoist.desktop.temp
  patch todoist.desktop.temp < ${srcdir}/fix-desktop-file.patch
  cp todoist.desktop.temp ${srcdir}/squashfs-root/todoist.desktop
  rm todoist.desktop.temp

  # Repackage the AppImage
  asar p ${srcdir}/app.extracted ${srcdir}/app.asar
  cp ${srcdir}/app.asar ${srcdir}/squashfs-root/resources/
  appimagetool squashfs-root ./"${_appimage}.patched"
}

package() {
  # AppImage install the repackaged version
  install -Dm755 "${srcdir}/${_appimage}.patched" "${pkgdir}/opt/${pkgname}/${pkgname}.AppImage"

  # Desktop file
  install -Dm644 "${srcdir}/squashfs-root/${_pkgname}.desktop" \
    "${pkgdir}/usr/share/applications/${_pkgname}.desktop"

  # Icon
  install -dm755 "${pkgdir}/usr/share/"
  cp -a "${srcdir}/squashfs-root/usr/share/icons" "${pkgdir}/usr/share/"
  mkdir -p "${pkgdir}/usr/share/pixmaps/"
  install -Dm644 "${srcdir}/squashfs-root/usr/share/icons/hicolor/512x512/apps/todoist.png" "${pkgdir}/usr/share/pixmaps"

  # Symlink executable
  install -dm755 "${pkgdir}/usr/bin"
  ln -s "/opt/${pkgname}/${pkgname}.AppImage" "${pkgdir}/usr/bin/${_pkgname}"
}
