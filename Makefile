PKGVER=9.26.4
APP_IMAGE=https://electron-dl.todoist.net/linux/Todoist-linux-$(PKGVER)-x86_64-latest.AppImage
WORK_DIR=work
 
.PHONY: extract asar create-patches fix-desktop-file.patch fix-electron-js.patch

all:

$(WORK_DIR):
	@mkdir -p ./$(WORK_DIR)
	@touch $@

$(WORK_DIR)/Todoist-linux-$(PKGVER)-x86_64-latest.AppImage: $(WORK_DIR)
	@curl -L $(APP_IMAGE) -o $(WORK_DIR)/Todoist-linux-$(PKGVER)-x86_64-latest.AppImage
	@chmod +x $(WORK_DIR)/Todoist-linux-$(PKGVER)-x86_64-latest.AppImage
	@touch $@

$(WORK_DIR)/squashfs-root: $(WORK_DIR)/Todoist-linux-$(PKGVER)-x86_64-latest.AppImage
	@cd $(WORK_DIR) && \
	./Todoist-linux-$(PKGVER)-x86_64-latest.AppImage --appimage-extract; \
	touch squashfs-root

$(WORK_DIR)/app.asar.extracted: $(WORK_DIR)/squashfs-root
	@asar e $(WORK_DIR)/squashfs-root/resources/app.asar $(WORK_DIR)/app.asar.extracted

fix-desktop-file.patch: $(WORK_DIR)/squashfs-root todoist.mod.desktop
	@cp $(WORK_DIR)/squashfs-root/todoist.desktop .
	@-diff -u todoist.desktop todoist.mod.desktop > $@

fix-electron-js.patch: $(WORK_DIR)/app.asar.extracted electron.mod.js
	@bunx js-beautify $(WORK_DIR)/app.asar.extracted/webpack/electron/electron.js > electron.js
	@-diff -u electron.js electron.mod.js > $@

create-patches: fix-desktop-file.patch fix-electron-js.patch

clean:
	@rm -rf $(WORK_DIR)/app.extracted
	@rm -rf $(WORK_DIR)/squashfs-root
	@rm -f fix-desktop-file.patch
	@rm -f fix-electron-js.patch
	@rm -f todoist.desktop
	@rm -f electron.js
