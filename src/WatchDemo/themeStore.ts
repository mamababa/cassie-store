// themeStore.ts
import { Model } from '../Model';

// 主题状态接口
interface ThemeState {
  theme: 'light' | 'dark';
  language: 'zh' | 'en';
  fontSize: number;

  // 计算属性（自动计算）
  isDarkMode: boolean;
  displayName: string;
}

// 创建主题Store
const themeStore = new Model<ThemeState>({
  state: {
    theme: 'light',
    language: 'zh',
    fontSize: 14,
    isDarkMode: false,
    displayName: '',
  },

  // 🧮 计算属性（第9章的功能）
  computed: [
    {
      keys: ['theme'],
      handler: (state, prevState, diff) => {
        console.log('🧮 计算属性：主题相关计算');
        return {
          isDarkMode: state.theme === 'dark',
        };
      },
    },
    {
      keys: ['language'],
      handler: (state, prevState, diff) => {
        console.log('🧮 计算属性：语言相关计算');
        const names = {
          zh: '中文主题',
          en: 'English Theme'
        };
        return {
          displayName: names[state.language],
        };
      },
    },
  ],

  // 🆕 Watch配置（本章的新功能）
  watch: [
    {
      // 监听主题变化
      keys: ['theme'],
      handler: (state, prevState, diff) => {
        console.log('👂 Watch：主题变化监听器触发');
        console.log('变化的字段:', diff);
        console.log(`主题从 ${prevState.theme} 切换到 ${state.theme}`);

        // 副作用1：更新页面CSS类
        if (typeof document !== 'undefined') {
          document.body.className = `theme-${state.theme}`;
          console.log('✅ 已更新页面CSS类');
        }

        // 副作用2：保存用户偏好
        try {
          localStorage.setItem('theme', state.theme);
          console.log('✅ 已保存主题偏好到localStorage');
        } catch (error) {
          console.error('❌ 保存主题偏好失败:', error);
        }

        // 副作用3：显示切换提示
        const messages = {
          dark: '🌙 已切换到暗色主题，保护您的眼睛',
          light: '☀️ 已切换到亮色主题，清晰明亮'
        };
        console.log(messages[state.theme]);

        // 副作用4：模拟同步到服务器
        console.log('📡 同步主题设置到服务器...');
        setTimeout(() => {
          console.log('✅ 主题设置同步完成');
        }, 1000);
      },
    },
    {
      // 监听语言变化
      keys: ['language'],
      handler: (state, prevState, diff) => {
        console.log('👂 Watch：语言变化监听器触发');
        console.log(`语言从 ${prevState.language} 切换到 ${state.language}`);

        // 副作用1：更新页面语言属性
        if (typeof document !== 'undefined') {
          document.documentElement.lang = state.language;
          console.log('✅ 已更新页面语言属性');
        }

        // 副作用2：保存语言偏好
        try {
          localStorage.setItem('language', state.language);
          console.log('✅ 已保存语言偏好到localStorage');
        } catch (error) {
          console.error('❌ 保存语言偏好失败:', error);
        }

        // 副作用3：显示语言切换提示
        const messages = {
          zh: '语言已切换为中文',
          en: 'Language switched to English'
        };
        console.log(messages[state.language]);
      },
    },
    {
      // 监听字体大小变化
      keys: ['fontSize'],
      handler: (state, prevState, diff) => {
        console.log('👂 Watch：字体大小变化监听器触发');
        console.log(`字体大小从 ${prevState.fontSize}px 调整到 ${state.fontSize}px`);

        // 副作用1：更新CSS变量
        if (typeof document !== 'undefined') {
          document.documentElement.style.setProperty('--font-size', `${state.fontSize}px`);
          console.log('✅ 已更新CSS字体大小变量');
        }

        // 副作用2：保存字体偏好
        try {
          localStorage.setItem('fontSize', String(state.fontSize));
          console.log('✅ 已保存字体偏好到localStorage');
        } catch (error) {
          console.error('❌ 保存字体偏好失败:', error);
        }

        // 副作用3：无障碍提示
        if (state.fontSize >= 18) {
          console.log('👁️ 大字体模式，更易阅读');
        } else if (state.fontSize <= 12) {
          console.log('🔍 小字体模式，节省空间');
        }
      },
    },
  ],
});

// 辅助函数
const switchTheme = () => {
  const currentTheme = themeStore.getState().theme;
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  themeStore.setState({ theme: newTheme });
};

const switchLanguage = () => {
  const currentLang = themeStore.getState().language;
  const newLang = currentLang === 'zh' ? 'en' : 'zh';
  themeStore.setState({ language: newLang });
};

const increaseFontSize = () => {
  const currentSize = themeStore.getState().fontSize;
  themeStore.setState({ fontSize: Math.min(currentSize + 2, 24) });
};

const decreaseFontSize = () => {
  const currentSize = themeStore.getState().fontSize;
  themeStore.setState({ fontSize: Math.max(currentSize - 2, 10) });
};

export { themeStore, switchTheme, switchLanguage, increaseFontSize, decreaseFontSize };