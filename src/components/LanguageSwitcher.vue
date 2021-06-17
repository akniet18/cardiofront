<template>
  <div class="langPosition">
    <button
      href="#"
      class="flex items-center langDropdownButton"
      @click="toggleVisibility"
      @keydown.space.exact.prevent="toggleVisibility"
      @keydown.esc.exact="hideDropdown"
      @keydown.shift.tab="hideDropdown"
      @keydown.up.exact.prevent="startArrowKeys"
      @keydown.down.exact.prevent="startArrowKeys"
    >   
        <div class="fl">
            <img :src="require(`@/assets/flag_${$i18n.locale}.svg`)" alt="flag" class="flagShadow" />
        </div>
    </button>
    <transition name="dropdown-fade">
      <ul
        v-if="isVisible"
        ref="dropdown"
        v-on-clickaway="hideDropdown"
        class="langBox"
      >
        <li v-for="(lang, idx) in langs" :key="idx">
          <a
            href="#"
            class="flex langHover"
            @click.prevent="setLocale(lang.shortName)"
            @keydown.up.exact.prevent
            @keydown.tab.exact="focusNext(false)"
            @keydown.down.exact.prevent="focusNext(true)"
            @keydown.esc.exact="hideDropdown"
          > 
            <img :src="lang.flag" :alt="lang.longName" class="flag" />
            <span class="localLang">{{ lang.localName }}</span>
          </a>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  name: "LanguageSwitcher",
  data() {
    return {
      isVisible: false,
      focusedIndex: 0,
      langs: [
        {
          shortName: "en",
          longName: "English",
          localName: "English",
          flag: require(`@/assets/flag_en.svg`)
        },
        {
          shortName: "kz",
          longName: "Kazakhstan",
          localName: "Қазақша",
          flag: require(`@/assets/flag_kz.svg`)
        },
        {
          shortName: "ru",
          longName: "Russian",
          localName: "Русский",
          flag: require(`@/assets/flag_ru.svg`)
        },
      ]
    };
  },
  methods: {
    toggleVisibility() {
      this.isVisible = !this.isVisible;
    },
    hideDropdown() {
      this.isVisible = false;
      this.focusedIndex = 0;
    },
    startArrowKeys() {
      if (this.isVisible) {
        this.$refs.dropdown.children[0].children[0].focus();
      }
    },
    focusPrevious(isArrowKey) {
      this.focusedIndex = this.focusedIndex - 1;
      if (isArrowKey) {
        this.focusItem();
      }
    },
    focusNext(isArrowKey) {
      this.focusedIndex = this.focusedIndex + 1;
      if (isArrowKey) {
        this.focusItem();
      }
    },
    focusItem() {
      this.$refs.dropdown.children[this.focusedIndex].children[0].focus();
    },
    setLocale(locale) {
      this.$i18n.locale = locale;
      localStorage.setItem("lang", locale);
      // Uncomment the below lines if you need language prefixes to be shown in the URL
      // example: en.website.com (additional router configuration required)
      // this.$router.push({
      //   params: { lang: locale }
      // })
      this.hideDropdown();
    }
  }
};
</script>

<style scoped>
.langPosition {
  z-index: 99999999;
  position: fixed;
  display: flex;
  justify-content: center;
  bottom: 30px;
  left: 30px;
}
.langBox {
  user-select: none;
  padding: 5px 5px 5px -5px;
  width: max-content;
  box-shadow: 0px 3px 6px rgb(204, 210, 235);
}
.localLang {
  position: absolute;
  margin-top: 3px;
  font-size: 18px;
  padding-left: 15px;
  font-weight: 400;
  vertical-align: middle;
}
.dropdown-fade-enter-active,
.dropdown-fade-leave-active {
  transition: all 0.1s ease-in-out;
}
.dropdown-fade-enter,
.dropdown-fade-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}
.langDropdownButton {
  outline: none;
  cursor: pointer !important;
  background-color: transparent !important;
  border: none;
  padding-right: 0px;
}
.shortName {
  margin-top: 5px !important;
}
ul {
  text-align: left;
  min-width: 138px;
  border-radius: 8px;
  background: white;
  z-index: 500;
  position: absolute;
  list-style: none;
  padding: 10px 10px !important;
  margin: 0px !important;
  bottom: 60px;
  left: -10px;
  
}
ul li {
    padding: 5px 0;
}
.flag { 
  width: 30px;
}
.flagShadow {
  border-radius: 50px;
  box-shadow: 0px 3px 3px rgb(204, 210, 235);
  width: 35px;
}
.langHover {
  margin: 10px;
  text-decoration: none;
  color: #222;
  transition: all 0.1s ease-in-out;
}
.langHover:hover {
    color: #007aff;
  }
.fl{
    display: flex;
    align-items: center;
}
</style>