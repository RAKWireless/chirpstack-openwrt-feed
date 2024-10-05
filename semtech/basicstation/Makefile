include $(TOPDIR)/rules.mk

PKG_NAME:=basicstation
PKG_VERSION:=2.0.6
PKG_RELEASE:=1

PKG_SOURCE:=$(PKG_NAME)-$(PKG_VERSION).tar.gz
PKG_SOURCE_URL:=https://codeload.github.com/lorabasics/basicstation/tar.gz/v$(PKG_VERSION)?
PKG_HASH:=7e285de94bae1174b4c3496fc3ab15fe67c72f92c0693d2320bafc654a9dfb43

PKG_MAINTAINER:=Semtech Corporation
PKG_LICENSE:=BSD
PKG_LICENSE_FILES:=LICENSE

include $(INCLUDE_DIR)/package.mk

TAR_OPTIONS+= --strip-components 1
TAR_CMD=$(HOST_TAR) -C $(1) $(TAR_OPTIONS)
TARGET_CFLAGS:=-g -O0 -Wall -Wextra -std=c99 -Iinc -I. -fPIC
VARIANT:=stdn
ARCH:=aarch64

define Package/basicstation
	SECTION:=chirpstack
	CATEGORY:=ChirpStack
	TITLE:=basicstation
	URL:=https://github.com/lorabasics/basicstation
endef

define Package/basicstation/description
	LoRa Basics™ Station
endef

define Build/Compile
	$(MAKE) -C $(PKG_BUILD_DIR) platform=corecell variant=$(VARIANT) arch=$(ARCH)
endef

define Build/InstallDev
	$(INSTALL_DIR) $(STAGING_DIR)/usr/bin
	$(INSTALL_DATA) $(PKG_BUILD_DIR)/basicstation/build-corecell-$(VARIANT)/bin/station $(STAGING_DIR)/usr/bin/station-corecell
endef

define Package/basicstation/install
	$(INSTALL_DIR) $(1)/usr/bin
	$(INSTALL_DATA) $(PKG_BUILD_DIR)/basicstation/build-corecell-$(VARIANT)/bin/station $(1)/usr/bin/station-corecell
endef

$(eval $(call BuildPackage,basicstation))
