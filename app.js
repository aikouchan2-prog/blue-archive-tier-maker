const STORAGE_KEY = "ba-tier-maker:v1";
const EXPORT_VERSION = 1;
const WIKI_BASE_URL = "https://bluearchive.wiki";
const WIKI_API_BASE_URL = "https://bluearchive.wiki/w/api.php?action=parse&prop=text&format=json&origin=*";
const CHARACTER_SOURCES = [
  { page: "Characters_image_list", label: "キャラ" },
  { page: "NPC", label: "NPC" },
];
const EXCLUDED_CHARACTER_TITLES = new Set([
  "Black Suit",
  "Decalcomanie",
  "Francis",
  "Golconde",
  "Maestro",
  "Professor Smug",
  "Underground Dweller",
]);
const TIERMAKER_TEMPLATE_URL = "https://tiermaker.com/create/blue-archive-students-march-2025-jp-17158071";
const TIERMAKER_IMAGE_BASE_URL =
  "https://tiermaker.com/images/media/template_images/2024/17158071/blue-archive-students-march-2025-jp-17158071/";
const TIERMAKER_IMAGE_PROXY_URL = "https://images.weserv.nl/?url=";
const THUMBNAIL_ZOOM = 1.22;
const THUMBNAIL_FOCUS_Y = 0.24;
const GROUP_LABEL_HEIGHT = 20;
const TIER_COLOR_PALETTE = [
  "#ff7f7f",
  "#ffbf7f",
  "#ffdf7f",
  "#ffff7f",
  "#bfff7f",
  "#5fb875",
  "#49b9bd",
  "#4d8fcc",
  "#5b6fbd",
  "#8b6fc6",
  "#b66aa5",
  "#7f6f8f",
  "#68757b",
  "#98a4a8",
  "#3f494f",
];
const DEFAULT_NEW_TIER_COLOR = "#49b9bd";
const TIERMAKER_IMAGE_FILES = [
  "airibandicon.png",
  "airiicon.png",
  "airikillericon.png",
  "akanebunnygirlicon.png",
  "akaneicon.png",
  "akaneschoolgirlicon.png",
  "akariicon.png",
  "akarinewyearicon.png",
  "akemiicon.png",
  "akiraicon.png",
  "akoarkuniformicon.png",
  "akodressicon.png",
  "akoicon.png",
  "aliceicon.png",
  "alicemaidicon.png",
  "aoiicon.png",
  "arataicon.png",
  "aronaicon.png",
  "arudressicon.png",
  "aruicon.png",
  "arunewyearicon.png",
  "asunabunnygirlicon.png",
  "asunaicon.png",
  "asunaschoolgirlicon.png",
  "atsukoicon.png",
  "atsukoswimsuiticon.png",
  "ayanearkuniformicon.png",
  "ayaneicon.png",
  "ayaneidolicon.png",
  "ayaneswimsuiticon.png",
  "ayumuarkuniformicon.png",
  "ayumuicon.png",
  "azusaicon.png",
  "azusaswimsuiticon.png",
  "cherinohotspringicon.png",
  "cherinoicon.png",
  "cherinoqipaoicon.png",
  "chiakiicon.png",
  "chihirocampicon.png",
  "chihiroicon.png",
  "chihiropajamasicon.png",
  "chinatsuhotspringicon.png",
  "chinatsuicon.png",
  "chiseicon.png",
  "chiseswimsuiticon.png",
  "eimiicon.png",
  "eimiswimsuiticon.png",
  "einicon.png",
  "erikaicon.png",
  "fubukiicon.png",
  "fubukiidolicon.png",
  "fubukiswimsuiticon.png",
  "fuukacasualicon.png",
  "fuukaicon.png",
  "fuukanewyearicon.png",
  "gscpresidenticon.png",
  "haineicon.png",
  "hanaecheerleadericon.png",
  "hanaechristmasicon.png",
  "hanaeicon.png",
  "hanakoarkuniformicon.png",
  "hanakoicon.png",
  "hanakoswimsuiticon.png",
  "harecampicon.png",
  "hareicon.png",
  "harepajamasicon.png",
  "harukadressicon.png",
  "harukaicon.png",
  "harukanewyearicon.png",
  "harukasuiticon.png",
  "harunagymicon.png",
  "harunaicon.png",
  "harunanewyearicon.png",
  "hasumigymicon.png",
  "hasumiicon.png",
  "hibikicheerleadericon.png",
  "hibikiicon.png",
  "hifumiicon.png",
  "hifumiswimsuiticon.png",
  "hikariicon.png",
  "himariicon.png",
  "hinadressicon.png",
  "hinaicon.png",
  "hinanightwearicon.png",
  "hinaswimsuiticon.png",
  "hinataicon.png",
  "hinataswimsuiticon.png",
  "hiyoriicon.png",
  "hiyoriswimsuiticon.png",
  "hoshinoarmedicon.png",
  "hoshinoicon.png",
  "hoshinoswimsuiticon.png",
  "hoshinoterroricon.png",
  "hoshinowintericon.png",
  "hoshinoyoungicon.png",
  "ibukidressicon.png",
  "ibukiicon.png",
  "ichikaicon.png",
  "ichikasuiticon.png",
  "ioriicon.png",
  "ioriswimsuiticon.png",
  "irohaicon.png",
  "izumiicon.png",
  "izuminewyearicon.png",
  "izumiswimsuiticon.png",
  "izunaicon.png",
  "izunaswimsuiticon.png",
  "junkoicon.png",
  "junkonewyearicon.png",
  "juriicon.png",
  "juriparttimericon.png",
  "kaedeguideicon.png",
  "kaedeicon.png",
  "kaguyaicon.png",
  "kahoicon.png",
  "kaiicon.png",
  "kannaicon.png",
  "kannaswimsuiticon.png",
  "karinbunnygirlicon.png",
  "karinicon.png",
  "karinschoolgirlicon.png",
  "kasumiicon.png",
  "kayaicon.png",
  "kayokoarkuniformicon.png",
  "kayokodressicon.png",
  "kayokoicon.png",
  "kayokonewyearicon.png",
  "kazusabandicon.png",
  "kazusaicon.png",
  "kazusawerewolficon.png",
  "kikyouicon.png",
  "kiraraicon.png",
  "kirinoicon.png",
  "kirinoidolicon.png",
  "kirinoswimsuiticon.png",
  "kisakiicon.png",
  "koharuicon.png",
  "koharuswimsuiticon.png",
  "kokonaicon.png",
  "kokurikoicon.png",
  "konokaicon.png",
  "kotamacampicon.png",
  "kotamaicon.png",
  "kotamapajamasicon.png",
  "kotoricheerleadericon.png",
  "kotoriicon.png",
  "koyukibunnygirlicon.png",
  "koyukiicon.png",
  "koyukipajamasicon.png",
  "kurumiicon.png",
  "kuzunohaicon.png",
  "maiicon.png",
  "makicampicon.png",
  "makiicon.png",
  "makipajamasicon.png",
  "makotodressicon.png",
  "makotoicon.png",
  "marigymicon.png",
  "mariicon.png",
  "mariidolicon.png",
  "marinaicon.png",
  "marinaqipaoicon.png",
  "mashiroicon.png",
  "mashiroswimsuiticon.png",
  "meguicon.png",
  "meruhotspringicon.png",
  "meruicon.png",
  "michiruicon.png",
  "midoriicon.png",
  "midorimaidicon.png",
  "mikaicon.png",
  "mikuicon.png",
  "mimoriicon.png",
  "mimoriswimsuiticon.png",
  "minaicon.png",
  "mineicon.png",
  "mineidolicon.png",
  "minoriicon.png",
  "miraiicon.png",
  "misakamikotoicon.png",
  "misakiswimsuiticon.png",
  "misakiunmaskicon.png",
  "miyakoicon.png",
  "miyakoswimsuiticon.png",
  "miyuicon.png",
  "miyuswimsuiticon.png",
  "moeicon.png",
  "moeswimsuiticon.png",
  "momijiicon.png",
  "momoiicon.png",
  "momoimaidicon.png",
  "momokaarkuniformicon.png",
  "momokaicon.png",
  "mutsukidressicon.png",
  "mutsukiicon.png",
  "mutsukinewyearicon.png",
  "mutsukisuiticon.png",
  "nagisaicon.png",
  "nagusaicon.png",
  "natsubandicon.png",
  "natsufrankensteinicon.png",
  "natsuicon.png",
  "nerubunnygirlicon.png",
  "neruicon.png",
  "neruschoolgirlicon.png",
  "nikoicon.png",
  "niyaicon.png",
  "noaicon.png",
  "noapajamasicon.png",
  "nodokahotspringicon.png",
  "nodokaicon.png",
  "nonomiicon.png",
  "nonomiswimsuiticon.png",
  "nonomiwintericon.png",
  "nozomiicon.png",
  "ohricon.png",
  "otogiicon.png",
  "pinaguideicon.png",
  "pinaicon.png",
  "rabuicon.png",
  "rabuswimsuiticon.png",
  "reiicon.png",
  "reijoicon.png",
  "reisaicon.png",
  "rengeicon.png",
  "rinarkuniformicon.png",
  "rinicon.png",
  "rioicon.png",
  "rumiicon.png",
  "rumiyoungicon.png",
  "sakiicon.png",
  "sakiswimsuiticon.png",
  "sakurakoicon.png",
  "sakurakoidolicon.png",
  "saoridressicon.png",
  "saoriicon.png",
  "saoriswimsuiticon.png",
  "satenruikoicon.png",
  "satsukiicon.png",
  "sayacasualicon.png",
  "sayaicon.png",
  "seiaicon.png",
  "senacasualicon.png",
  "senaicon.png",
  "serikaicon.png",
  "serikaidolicon.png",
  "serikanewyearicon.png",
  "serikaswimsuiticon.png",
  "serinachristmasicon.png",
  "serinaicon.png",
  "serinanurseicon.png",
  "shigurehotspringicon.png",
  "shigureicon.png",
  "shimikoicon.png",
  "shinonicon.png",
  "shirokoicon.png",
  "shirokoridingicon.png",
  "shirokoswimsuiticon.png",
  "shirokoterroricon.png",
  "shirokoyoungicon.png",
  "shizukoicon.png",
  "shizukoswimsuiticon.png",
  "shokuhoumisakiicon.png",
  "shunicon.png",
  "shunyoungicon.png",
  "shuroicon.png",
  "soficon.png",
  "soraicon.png",
  "sumireicon.png",
  "sumireparttimericon.png",
  "sumomoicon.png",
  "suouicon.png",
  "suzumiicon.png",
  "takaneicon.png",
  "tokibunnygirlicon.png",
  "tokiicon.png",
  "tokischoolgirlicon.png",
  "tomoeicon.png",
  "tomoeqipaoicon.png",
  "tsubakiguideicon.png",
  "tsubakiicon.png",
  "tsukuyoicon.png",
  "tsumugiicon.png",
  "tsurugidressicon.png",
  "tsurugiicon.png",
  "tsurugiswimsuiticon.png",
  "uiicon.png",
  "uiswimsuiticon.png",
  "umikaicon.png",
  "utahacheerleadericon.png",
  "utahaicon.png",
  "wakamoicon.png",
  "wakamokimonoicon.png",
  "wakamoswimsuiticon.png",
  "yakumoicon.png",
  "yoshimibandicon.png",
  "yoshimiicon.png",
  "yoshimimummyicon.png",
  "yukariicon.png",
  "yukinoicon.png",
  "yumeicon.png",
  "yuukaarkuniformicon.png",
  "yuukagymicon.png",
  "yuukaicon.png",
  "yuukapajamasicon.png",
  "yuzuicon.png",
  "yuzumaidicon.png",
];

const DEFAULT_TIERS = [
  { id: "tier-s", label: "S", color: "#ff7f7f", itemIds: [] },
  { id: "tier-a", label: "A", color: "#ffbf7f", itemIds: [] },
  { id: "tier-b", label: "B", color: "#ffdf7f", itemIds: [] },
  { id: "tier-c", label: "C", color: "#ffff7f", itemIds: [] },
  { id: "tier-d", label: "D", color: "#bfff7f", itemIds: [] },
  { id: "tier-unclassified", label: "未分類", color: "#98a4a8", itemIds: [] },
];

const tierRows = document.querySelector("#tierRows");
const tierRowTemplate = document.querySelector("#tierRowTemplate");
const characterTemplate = document.querySelector("#characterTemplate");
const loadStatus = document.querySelector("#loadStatus");
const characterCount = document.querySelector("#characterCount");
const searchInput = document.querySelector("#searchInput");
const addTierButton = document.querySelector("#addTierButton");
const addCharacterButton = document.querySelector("#addCharacterButton");
const refreshButton = document.querySelector("#refreshButton");
const exportPngButton = document.querySelector("#exportPngButton");
const exportJsonButton = document.querySelector("#exportJsonButton");
const importJsonButton = document.querySelector("#importJsonButton");
const importFileInput = document.querySelector("#importFileInput");
const resetButton = document.querySelector("#resetButton");
const tierBoard = document.querySelector("#tierBoard");
const addTierDialog = document.querySelector("#addTierDialog");
const addTierForm = document.querySelector("#addTierForm");
const newTierLabel = document.querySelector("#newTierLabel");
const newTierColor = document.querySelector("#newTierColor");
const newTierPalette = document.querySelector("#newTierPalette");
const cancelTierButton = document.querySelector("#cancelTierButton");
const addCharacterDialog = document.querySelector("#addCharacterDialog");
const addCharacterForm = document.querySelector("#addCharacterForm");
const newCharacterTitle = document.querySelector("#newCharacterTitle");
const newCharacterImageUrl = document.querySelector("#newCharacterImageUrl");
const newCharacterSourceUrl = document.querySelector("#newCharacterSourceUrl");
const cancelCharacterButton = document.querySelector("#cancelCharacterButton");
const tierColorMenu = document.querySelector("#tierColorMenu");

let state = createEmptyState();
let sortables = [];
let activeTierColorId = null;
let selectedTargetTierId = null;

init();

async function init() {
  bindControls();

  const savedState = loadSavedState();
  if (savedState) {
    state = savedState;
    setStatus("保存済みデータを復元しました");
  }

  render();
  await refreshCharacters({ keepExistingLayout: Boolean(savedState) });
}

function bindControls() {
  renderColorPalette(newTierPalette, newTierColor.value);
  searchInput.addEventListener("input", applySearchFilter);
  addTierButton.addEventListener("click", openAddTierDialog);
  addCharacterButton.addEventListener("click", openAddCharacterDialog);
  addTierForm.addEventListener("submit", addTierFromForm);
  addCharacterForm.addEventListener("submit", addCharacterFromForm);
  newTierPalette.addEventListener("click", handleNewTierPaletteClick);
  cancelTierButton.addEventListener("click", () => closeDialog(addTierDialog));
  cancelCharacterButton.addEventListener("click", () => closeDialog(addCharacterDialog));
  refreshButton.addEventListener("click", () => refreshCharacters({ keepExistingLayout: true, force: true }));
  exportJsonButton.addEventListener("click", exportJson);
  importJsonButton.addEventListener("click", () => importFileInput.click());
  importFileInput.addEventListener("change", importJson);
  exportPngButton.addEventListener("click", exportPng);
  resetButton.addEventListener("click", resetLayout);
  tierColorMenu.addEventListener("click", handleTierColorMenuClick);
  document.addEventListener("click", handleDocumentClick);
  window.addEventListener("resize", closeTierColorMenu);
  window.addEventListener("scroll", closeTierColorMenu, true);
}

function openAddTierDialog() {
  addTierForm.reset();
  newTierLabel.value = "";
  setNewTierColor(DEFAULT_NEW_TIER_COLOR);
  openDialog(addTierDialog, newTierLabel);
}

function openAddCharacterDialog() {
  addCharacterForm.reset();
  openDialog(addCharacterDialog, newCharacterTitle);
}

function openDialog(dialog, focusTarget) {
  if (typeof dialog.showModal === "function") {
    dialog.showModal();
  } else {
    dialog.setAttribute("open", "");
  }
  window.setTimeout(() => focusTarget?.focus(), 0);
}

function closeDialog(dialog) {
  if (typeof dialog.close === "function") {
    dialog.close();
  } else {
    dialog.removeAttribute("open");
  }
}

function addTierFromForm(event) {
  event.preventDefault();

  const label = newTierLabel.value.trim();
  const color = normalizePaletteColor(newTierColor.value);
  if (!label || !isHexColor(color)) {
    setStatus("ランク名と色を確認してください");
    return;
  }

  const tier = {
    id: createUniqueTierId(label),
    label,
    color,
    itemIds: [],
  };
  const unclassifiedIndex = state.tiers.findIndex((entry) => entry.id === "tier-unclassified");
  state.tiers.splice(unclassifiedIndex >= 0 ? unclassifiedIndex : state.tiers.length, 0, tier);
  saveState();
  render();
  closeDialog(addTierDialog);
  setStatus(`ランク「${label}」を追加しました`);
}

function handleNewTierPaletteClick(event) {
  const swatch = event.target.closest(".color-swatch");
  if (!swatch || !newTierPalette.contains(swatch)) {
    return;
  }

  setNewTierColor(swatch.dataset.color);
}

function setNewTierColor(color) {
  const nextColor = normalizePaletteColor(color);
  newTierColor.value = nextColor;
  renderColorPalette(newTierPalette, nextColor);
}

function addCharacterFromForm(event) {
  event.preventDefault();

  const title = cleanTitle(newCharacterTitle.value);
  const imageUrl = normalizeUrl(newCharacterImageUrl.value);
  const sourceUrl = normalizeUrl(newCharacterSourceUrl.value);
  if (!title || !isRemoteUrl(imageUrl)) {
    setStatus("キャラ名と画像URLを確認してください");
    return;
  }

  const character = {
    id: createUniqueCharacterId(title),
    title,
    imageUrl,
    sourceUrl: isRemoteUrl(sourceUrl) ? sourceUrl : "",
  };

  state.characters.push(character);
  getUnclassifiedTier().itemIds.push(character.id);
  sortUnclassifiedTier();
  saveState();
  render();
  closeDialog(addCharacterDialog);
  setStatus(`キャラ「${title}」を未分類に追加しました`);
}

async function refreshCharacters({ keepExistingLayout = true, force = false } = {}) {
  try {
    setStatus(force ? "Wiki APIからキャラ/NPCを再取得中..." : "Wiki APIからキャラ/NPCを取得中...");
    const characters = await fetchWikiCharacters();
    mergeCharacters(characters, keepExistingLayout);
    saveState();
    render();
    setStatus(`${characters.length}件のキャラ/NPCを取得しました`);
  } catch (error) {
    console.error(error);
    if (!state.characters.length) {
      setStatus("取得に失敗しました。ネット接続またはWiki APIを確認してください");
    } else {
      setStatus("取得に失敗したため、保存済みデータを表示しています");
    }
  }
}

async function fetchWikiCharacters() {
  const results = await Promise.allSettled(CHARACTER_SOURCES.map(fetchCharacterSource));
  const recordsById = new Map();
  const failures = [];

  results.forEach((result, index) => {
    const source = CHARACTER_SOURCES[index];
    if (result.status === "rejected") {
      failures.push(`${source.label}: ${result.reason?.message || result.reason}`);
      return;
    }

    result.value.forEach((character) => {
      if (!recordsById.has(character.id)) {
        recordsById.set(character.id, character);
      }
    });
  });

  const records = sortCharactersByTitle(Array.from(recordsById.values()));
  if (!records.length) {
    throw new Error(`No characters found. ${failures.join(" / ")}`);
  }

  if (failures.length) {
    console.warn("Some Wiki sources failed:", failures);
  }

  return excludeCharacters(applyTierMakerImages(records));
}

async function fetchCharacterSource(source) {
  const response = await fetch(`${WIKI_API_BASE_URL}&page=${encodeURIComponent(source.page)}`, { cache: "no-store" });
  if (!response.ok) {
    throw new Error(`${source.page} API error: ${response.status}`);
  }

  const payload = await response.json();
  const html = payload?.parse?.text?.["*"];
  if (!html) {
    throw new Error(`${source.page} API response did not include parse text`);
  }

  return extractCharactersFromHtml(html);
}

function extractCharactersFromHtml(html) {
  const doc = new DOMParser().parseFromString(html, "text/html");
  const records = [];
  const seenTitles = new Set();

  doc.querySelectorAll("a[title]").forEach((anchor) => {
    const image = anchor.querySelector("img");
    const title = cleanTitle(anchor.getAttribute("title"));
    if (!image || !title || seenTitles.has(title)) {
      return;
    }

    const imageUrl = getBestImageUrl(image);
    if (!imageUrl) {
      return;
    }

    seenTitles.add(title);
    records.push({
      id: createCharacterId(title),
      title,
      imageUrl,
      sourceUrl: normalizeUrl(anchor.getAttribute("href"), WIKI_BASE_URL),
    });
  });

  if (records.length < 1) {
    throw new Error("No characters found in Wiki API HTML");
  }

  return sortCharactersByTitle(records);
}

function getBestImageUrl(image) {
  const srcset = image.getAttribute("srcset") || image.getAttribute("data-srcset") || "";
  const bestSrcsetUrl = getLargestSrcsetUrl(srcset);
  const fallbackUrl = image.getAttribute("src") || image.getAttribute("data-src") || "";
  return upgradeWikiThumbnailUrl(normalizeUrl(bestSrcsetUrl || fallbackUrl), image);
}

function getLargestSrcsetUrl(srcset) {
  return srcset
    .split(",")
    .map((candidate) => {
      const [url, descriptor] = candidate.trim().split(/\s+/);
      const size = descriptor?.endsWith("w")
        ? Number.parseFloat(descriptor)
        : Number.parseFloat(descriptor || "1") * 1000;
      return { url, size: Number.isFinite(size) ? size : 0 };
    })
    .filter((candidate) => candidate.url)
    .sort((left, right) => right.size - left.size)[0]?.url || "";
}

function upgradeWikiThumbnailUrl(url, image) {
  if (!url || !image || !url.includes("static.wikitide.net/bluearchivewiki/thumb/")) {
    return url;
  }

  return url.replace(/\/thumb\/(.+)\/\d+px-[^/]+$/i, "/$1");
}

function applyTierMakerImages(records) {
  const tierMakerRecords = buildTierMakerRecords();
  const tierMakerByKey = new Map(tierMakerRecords.map((record) => [record.tierMakerKey, record]));
  const usedTierMakerKeys = new Set();
  const updatedRecords = records.map((record) => {
    const match = findTierMakerRecordForTitle(record.title, tierMakerByKey);
    if (!match) {
      return record;
    }

    usedTierMakerKeys.add(match.tierMakerKey);
    return {
      ...record,
      imageUrl: match.imageUrl,
    };
  });

  const existingKeys = new Set(updatedRecords.map((record) => normalizeTierMakerTitleKey(record.title)));
  const existingIds = new Set(updatedRecords.map((record) => record.id));
  const extras = tierMakerRecords
    .filter((record) => !usedTierMakerKeys.has(record.tierMakerKey))
    .filter((record) => !existingKeys.has(record.tierMakerKey))
    .map((record) => ({
      id: createUniqueId(record.id, existingIds),
      title: record.title,
      imageUrl: record.imageUrl,
      sourceUrl: record.sourceUrl,
    }));

  return sortCharactersByTitle([...updatedRecords, ...extras]);
}

function excludeCharacters(records) {
  return records.filter((record) => !isExcludedCharacter(record));
}

function isExcludedCharacter(record) {
  return EXCLUDED_CHARACTER_TITLES.has(record?.title);
}

function buildTierMakerRecords() {
  return TIERMAKER_IMAGE_FILES.map((file) => {
    const tierMakerKey = getTierMakerFileKey(file);
    return {
      id: `tiermaker-${tierMakerKey}`,
      title: titleFromTierMakerKey(tierMakerKey),
      imageUrl: getTierMakerImageUrl(file),
      sourceUrl: TIERMAKER_TEMPLATE_URL,
      tierMakerKey,
    };
  });
}

function getTierMakerImageUrl(file) {
  const rawUrl = `${TIERMAKER_IMAGE_BASE_URL}${file}`;
  return `${TIERMAKER_IMAGE_PROXY_URL}${encodeURIComponent(rawUrl.replace(/^https?:\/\//, ""))}`;
}

function findTierMakerRecordForTitle(title, tierMakerByKey) {
  for (const key of getTierMakerCandidateKeys(title)) {
    const record = tierMakerByKey.get(key);
    if (record) {
      return record;
    }
  }
  return null;
}

function getTierMakerCandidateKeys(title) {
  const key = normalizeTierMakerTitleKey(title);
  const candidates = [key];
  const directAliases = {
    arisu: "alice",
    arisumaid: "alicemaid",
    hatsunemiku: "miku",
    hoshinobattle: "hoshinoarmed",
    professorniyaniya: "professorsmug",
  };
  const suffixAliases = [
    ["camping", "camp"],
    ["pajama", "pajamas"],
    ["schooluniform", "schoolgirl"],
    ["sportswear", "gym"],
    ["swimsuit", "suit"],
    ["kid", "young"],
    ["parttimer", "parttimer"],
  ];

  if (directAliases[key]) {
    candidates.push(directAliases[key]);
  }

  suffixAliases.forEach(([from, to]) => {
    if (key.endsWith(from)) {
      candidates.push(`${key.slice(0, -from.length)}${to}`);
    }
  });

  return Array.from(new Set(candidates));
}

function getTierMakerFileKey(file) {
  return String(file || "")
    .toLowerCase()
    .replace(/\.(png|jpe?g|webp)$/i, "")
    .replace(/icon$/i, "");
}

function normalizeTierMakerTitleKey(title) {
  return String(title || "")
    .normalize("NFKD")
    .toLowerCase()
    .replace(/＊/g, "")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]/g, "");
}

function titleFromTierMakerKey(key) {
  const specialTitles = {
    alice: "Arisu",
    alicemaid: "Arisu (Maid)",
    gscpresident: "GSC President",
    miku: "Hatsune Miku",
    misakamikoto: "Misaka Mikoto",
    ohr: "OHR",
    professorsmug: "Professor Smug",
    satenruiko: "Saten Ruiko",
    shirokoterror: "Shiroko Terror",
    shokuhoumisaki: "Shokuhou Misaki",
  };
  if (specialTitles[key]) {
    return specialTitles[key];
  }

  const suffixes = [
    ["arkuniform", "Ark Uniform"],
    ["bunnygirl", "Bunny Girl"],
    ["frankenstein", "Frankenstein"],
    ["cheerleader", "Cheerleader"],
    ["christmas", "Christmas"],
    ["hotspring", "Hot Spring"],
    ["kimono", "Kimono"],
    ["newyear", "New Year"],
    ["nightwear", "Nightwear"],
    ["parttimer", "Part-Timer"],
    ["pajamas", "Pajama"],
    ["schoolgirl", "School Uniform"],
    ["sportswear", "Sportswear"],
    ["swimsuit", "Swimsuit"],
    ["camping", "Camping"],
    ["casual", "Casual"],
    ["dress", "Dress"],
    ["guide", "Guide"],
    ["killer", "Killer"],
    ["idol", "Idol"],
    ["maid", "Maid"],
    ["mummy", "Mummy"],
    ["nurse", "Nurse"],
    ["pajama", "Pajama"],
    ["qipao", "Qipao"],
    ["riding", "Riding"],
    ["terror", "Terror"],
    ["winter", "Winter"],
    ["young", "Young"],
    ["armed", "Armed"],
    ["band", "Band"],
    ["camp", "Camping"],
    ["gym", "Sportswear"],
    ["suit", "Swimsuit"],
    ["unmask", "Unmasked"],
    ["werewolf", "Werewolf"],
  ];

  const suffix = suffixes.find(([rawSuffix]) => key.endsWith(rawSuffix));
  if (!suffix) {
    return titleCaseCompactKey(key);
  }

  const [rawSuffix, label] = suffix;
  const base = key.slice(0, -rawSuffix.length);
  return `${titleCaseCompactKey(base)} (${label})`;
}

function titleCaseCompactKey(key) {
  const wordAliases = {
    arisu: "Arisu",
    cherino: "Cherino",
    hoshino: "Hoshino",
    kayoko: "Kayoko",
    kisaki: "Kisaki",
    kokona: "Kokona",
    nonomi: "Nonomi",
    shiroko: "Shiroko",
    shun: "Shun",
    toki: "Toki",
    yuuka: "Yuuka",
  };
  if (wordAliases[key]) {
    return wordAliases[key];
  }

  return String(key || "")
    .replace(/([a-z])([0-9])/g, "$1 $2")
    .replace(/(^|\s)[a-z]/g, (letter) => letter.toUpperCase());
}

function mergeCharacters(fetchedCharacters, keepExistingLayout) {
  const savedById = new Map(state.characters.map((character) => [character.id, character]));
  const fetchedIds = new Set(fetchedCharacters.map((character) => character.id));
  const merged = fetchedCharacters.map((character) => ({
    ...savedById.get(character.id),
    ...character,
  }));

  state.characters.forEach((character) => {
    if (!fetchedIds.has(character.id) && !isExcludedCharacter(character)) {
      merged.push(character);
    }
  });

  state.characters = excludeCharacters(merged);

  if (!keepExistingLayout) {
    state.tiers = cloneDefaultTiers();
    getUnclassifiedTier().itemIds = state.characters.map((character) => character.id);
    return;
  }

  normalizeTierAssignments();
}

function render() {
  destroySortables();
  ensureSelectedTargetTier();
  tierRows.textContent = "";

  state.tiers.forEach((tier) => {
    const row = tierRowTemplate.content.firstElementChild.cloneNode(true);
    const labelCell = row.querySelector(".tier-label-cell");
    const labelText = row.querySelector(".tier-label-text");
    const colorButton = row.querySelector(".tier-color-button");
    const items = row.querySelector(".tier-items");
    const tierColor = normalizePaletteColor(tier.color);

    row.dataset.tierId = tier.id;
    row.classList.toggle("is-target-tier", tier.id === selectedTargetTierId);
    row.setAttribute("aria-selected", String(tier.id === selectedTargetTierId));
    tier.color = tierColor;
    labelCell.style.backgroundColor = tierColor;
    labelText.textContent = tier.label;
    colorButton.style.setProperty("--tier-color", tierColor);
    colorButton.style.backgroundColor = tierColor;
    colorButton.dataset.tierId = tier.id;
    items.dataset.tierId = tier.id;

    labelText.addEventListener("blur", () => updateTierLabel(tier.id, labelText.textContent));
    labelText.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        labelText.blur();
      }
    });
    row.addEventListener("click", (event) => handleTierRowClick(event, tier.id));
    colorButton.addEventListener("click", (event) => openTierColorMenu(tier.id, colorButton, event));

    renderTierItems(tier, items);

    tierRows.appendChild(row);
  });

  setupSortables();
  updateCharacterCount();
  applySearchFilter();
}

function renderTierItems(tier, items) {
  getTierRenderGroups(tier).forEach((group) => {
    if (group.characters.length > 1) {
      items.appendChild(createCharacterGroup(group));
    } else {
      items.appendChild(createCharacterCard(group.characters[0]));
    }
  });
}

function getTierRenderGroups(tier) {
  const charactersById = new Map(state.characters.map((character) => [character.id, character]));
  const characters = tier.itemIds.map((id) => charactersById.get(id)).filter(Boolean);
  const groups = [];

  for (let index = 0; index < characters.length; index += 1) {
    const groupName = getCharacterGroupName(characters[index].title);
    const groupCharacters = [characters[index]];
    while (
      index + 1 < characters.length &&
      getCharacterGroupName(characters[index + 1].title) === groupName
    ) {
      index += 1;
      groupCharacters.push(characters[index]);
    }

    groups.push({ label: groupName, characters: groupCharacters });
  }

  return groups;
}

function createCharacterGroup(group) {
  const groupElement = document.createElement("div");
  const header = document.createElement("div");
  const name = document.createElement("span");
  const badge = document.createElement("span");
  const cards = document.createElement("div");

  groupElement.className = "character-group";
  groupElement.tabIndex = 0;
  groupElement.dataset.group = group.label.toLowerCase();
  groupElement.draggable = !window.Sortable;
  groupElement.title = `${group.label} (${group.characters.length})`;
  groupElement.setAttribute("role", "button");
  groupElement.setAttribute("aria-label", `${group.label} グループを移動`);
  groupElement.style.setProperty("--group-span", String(group.characters.length));
  header.className = "character-group-label";
  name.className = "character-group-name";
  badge.className = "character-group-count";
  cards.className = "character-group-cards";
  cards.style.setProperty("--group-card-count", String(group.characters.length));

  name.textContent = group.label;
  badge.textContent = `${group.characters.length}`;
  header.append(name, badge);
  group.characters.forEach((character) => cards.appendChild(createCharacterCard(character, { interactive: false })));
  groupElement.append(header, cards);
  groupElement.addEventListener("dblclick", handleMovableDoubleClick);
  groupElement.addEventListener("keydown", handleMovableKeydown);

  return groupElement;
}

function createCharacterCard(character, { interactive = true } = {}) {
  const card = characterTemplate.content.firstElementChild.cloneNode(true);
  const image = card.querySelector("img");
  const name = card.querySelector(".character-name");

  card.dataset.id = character.id;
  card.dataset.title = character.title.toLowerCase();
  card.dataset.group = getCharacterGroupName(character.title).toLowerCase();
  card.tabIndex = interactive ? 0 : -1;
  card.draggable = !window.Sortable;
  card.title = character.title;
  image.src = character.imageUrl;
  image.alt = character.title;
  name.textContent = character.title;

  if (interactive) {
    card.addEventListener("dblclick", handleMovableDoubleClick);
    card.addEventListener("keydown", handleMovableKeydown);
  }

  return card;
}

function handleTierRowClick(event, tierId) {
  const target = event.target instanceof Element ? event.target : event.target?.parentElement;
  if (target?.closest(".tier-color-button, .character-card, .character-group")) {
    return;
  }

  selectTargetTier(tierId);
}

function selectTargetTier(tierId) {
  const tier = state.tiers.find((entry) => entry.id === tierId);
  if (!tier) {
    return;
  }

  selectedTargetTierId = tier.id;
  updateTargetTierSelection();
  setStatus(`移動先: 「${tier.label}」。サムネをダブルクリックで移動できます`);
}

function ensureSelectedTargetTier() {
  if (selectedTargetTierId && !state.tiers.some((tier) => tier.id === selectedTargetTierId)) {
    selectedTargetTierId = null;
  }
}

function updateTargetTierSelection() {
  document.querySelectorAll(".tier-row").forEach((row) => {
    const selected = row.dataset.tierId === selectedTargetTierId;
    row.classList.toggle("is-target-tier", selected);
    row.setAttribute("aria-selected", String(selected));
  });
}

function handleMovableDoubleClick(event) {
  event.preventDefault();
  event.stopPropagation();
  moveElementToSelectedTier(event.currentTarget);
}

function handleMovableKeydown(event) {
  if (event.key !== "Enter") {
    return;
  }

  event.preventDefault();
  event.stopPropagation();
  moveElementToSelectedTier(event.currentTarget);
}

function moveElementToSelectedTier(element) {
  const itemIds = getMovableItemIds(element);
  moveItemIdsToSelectedTier(itemIds);
}

function getMovableItemIds(element) {
  if (element.classList.contains("character-group")) {
    return Array.from(element.querySelectorAll(".character-card"))
      .map((card) => card.dataset.id)
      .filter(Boolean);
  }

  return element.dataset.id ? [element.dataset.id] : [];
}

function moveItemIdsToSelectedTier(itemIds) {
  const targetTier = state.tiers.find((tier) => tier.id === selectedTargetTierId);
  if (!targetTier) {
    setStatus("先に移動先ランクを選択してください");
    return;
  }

  const characterIds = new Set(state.characters.map((character) => character.id));
  const movedIds = Array.from(new Set(itemIds)).filter((id) => characterIds.has(id));
  if (!movedIds.length) {
    return;
  }

  const movedIdSet = new Set(movedIds);
  state.tiers.forEach((tier) => {
    tier.itemIds = tier.itemIds.filter((id) => !movedIdSet.has(id));
  });
  targetTier.itemIds.push(...movedIds);
  normalizeTierAssignments({ preserveOrder: true });
  saveState();
  render();
  setStatus(`${getMovedItemLabel(movedIds)}を「${targetTier.label}」へ移動しました`);
}

function getMovedItemLabel(itemIds) {
  const charactersById = new Map(state.characters.map((character) => [character.id, character]));
  const firstCharacter = charactersById.get(itemIds[0]);
  if (itemIds.length === 1) {
    return `「${firstCharacter?.title || itemIds[0]}」`;
  }

  return `「${getCharacterGroupName(firstCharacter?.title || itemIds[0])}」グループ`;
}

function setupSortables() {
  if (!window.Sortable) {
    setupNativeDragAndDrop();
    return;
  }

  document.querySelectorAll(".tier-items").forEach((container) => {
    sortables.push(
      new Sortable(container, {
        group: "characters",
        draggable: ".character-card, .character-group",
        animation: 130,
        forceFallback: true,
        fallbackOnBody: true,
        swapThreshold: 0.65,
        ghostClass: "sortable-ghost",
        chosenClass: "sortable-chosen",
        dragClass: "sortable-drag",
        onEnd: persistDomOrder,
      }),
    );
  });
}

function setupNativeDragAndDrop() {
  document.querySelectorAll(".character-card").forEach((card) => {
    card.addEventListener("dragstart", (event) => {
      card.classList.add("is-native-dragging");
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("text/plain", card.dataset.id);
    });

    card.addEventListener("dragend", () => {
      card.classList.remove("is-native-dragging");
      persistDomOrder();
    });
  });

  document.querySelectorAll(".tier-items").forEach((container) => {
    container.addEventListener("dragover", (event) => {
      event.preventDefault();
      const card = document.querySelector(".character-card.is-native-dragging");
      if (!card) {
        return;
      }

      const reference = getNativeDropReference(container, event.clientX, event.clientY);
      if (reference) {
        container.insertBefore(card, reference);
      } else {
        container.appendChild(card);
      }
    });

    container.addEventListener("drop", (event) => {
      event.preventDefault();
      const id = event.dataTransfer.getData("text/plain");
      const card = document.querySelector(`.character-card[data-id="${CSS.escape(id)}"]`);
      if (!card) {
        return;
      }

      const reference = getNativeDropReference(container, event.clientX, event.clientY);
      if (reference) {
        container.insertBefore(card, reference);
      } else {
        container.appendChild(card);
      }
      persistDomOrder();
    });
  });
}

function getNativeDropReference(container, x, y) {
  const cards = Array.from(
    container.querySelectorAll(".character-card:not(.is-native-dragging):not(.is-filtered-out)"),
  );

  return cards.find((card) => {
    const rect = card.getBoundingClientRect();
    if (y < rect.top) {
      return true;
    }
    if (y >= rect.top && y <= rect.bottom) {
      return x < rect.left + rect.width / 2;
    }
    return false;
  });
}

function destroySortables() {
  sortables.forEach((sortable) => sortable.destroy());
  sortables = [];
}

function persistDomOrder() {
  state.tiers = state.tiers.map((tier) => {
    const list = document.querySelector(`.tier-items[data-tier-id="${CSS.escape(tier.id)}"]`);
    if (!list) {
      return tier;
    }

    return {
      ...tier,
      itemIds: Array.from(list.querySelectorAll(".character-card")).map((card) => card.dataset.id),
    };
  });

  normalizeTierAssignments({ preserveOrder: true });
  saveState();
  render();
}

function updateTierLabel(tierId, label) {
  const tier = state.tiers.find((entry) => entry.id === tierId);
  if (!tier) {
    return;
  }

  tier.label = label.trim() || tier.label;
  saveState();
  render();
}

function updateTierColor(tierId, color) {
  const tier = state.tiers.find((entry) => entry.id === tierId);
  if (!tier) {
    return;
  }

  tier.color = normalizePaletteColor(color, tier.color);
  saveState();
  const row = document.querySelector(`.tier-row[data-tier-id="${CSS.escape(tierId)}"]`);
  row?.querySelector(".tier-label-cell")?.style.setProperty("background-color", tier.color);
  const colorButton = row?.querySelector(".tier-color-button");
  colorButton?.style.setProperty("--tier-color", tier.color);
  colorButton?.style.setProperty("background-color", tier.color);
}

function openTierColorMenu(tierId, button, event) {
  event.stopPropagation();
  activeTierColorId = tierId;
  const tier = state.tiers.find((entry) => entry.id === tierId);
  const selectedColor = normalizePaletteColor(tier?.color);
  renderColorPalette(tierColorMenu, selectedColor);

  const rect = button.getBoundingClientRect();
  const menuWidth = Math.min(620, window.innerWidth - 20);
  const left = Math.min(window.innerWidth - menuWidth - 10, Math.max(10, rect.right - menuWidth));
  const top = Math.min(window.innerHeight - 96, Math.max(10, rect.bottom + 8));
  tierColorMenu.style.left = `${left}px`;
  tierColorMenu.style.top = `${top}px`;
  tierColorMenu.hidden = false;
}

function closeTierColorMenu() {
  tierColorMenu.hidden = true;
  activeTierColorId = null;
}

function handleTierColorMenuClick(event) {
  const swatch = event.target.closest(".color-swatch");
  if (!swatch || !tierColorMenu.contains(swatch) || !activeTierColorId) {
    return;
  }

  updateTierColor(activeTierColorId, swatch.dataset.color);
  closeTierColorMenu();
}

function handleDocumentClick(event) {
  if (tierColorMenu.hidden || tierColorMenu.contains(event.target) || event.target.closest(".tier-color-button")) {
    return;
  }

  closeTierColorMenu();
}

function renderColorPalette(container, selectedColor) {
  container.textContent = "";
  const normalizedSelected = normalizePaletteColor(selectedColor);

  TIER_COLOR_PALETTE.forEach((color) => {
    const swatch = document.createElement("button");
    swatch.type = "button";
    swatch.className = "color-swatch";
    swatch.dataset.color = color;
    swatch.style.setProperty("--swatch-color", color);
    swatch.setAttribute("aria-label", `色 ${color}`);
    swatch.setAttribute("aria-pressed", String(color === normalizedSelected));
    if (color === normalizedSelected) {
      swatch.classList.add("is-selected");
    }
    container.appendChild(swatch);
  });
}

function applySearchFilter() {
  const query = searchInput.value.trim().toLowerCase();
  let visible = 0;

  document.querySelectorAll(".character-card").forEach((card) => {
    const matches = !query || card.dataset.title.includes(query);
    card.classList.toggle("is-filtered-out", !matches);
    if (matches) {
      visible += 1;
    }
  });

  const total = state.characters.length;
  characterCount.textContent = query ? `${visible}/${total}件` : `${total}件`;
  updateGroupLabelVisibility();
}

function updateGroupLabelVisibility() {
  document.querySelectorAll(".character-group").forEach((group) => {
    const hasVisibleCard = Boolean(group.querySelector(".character-card:not(.is-filtered-out)"));
    group.classList.toggle("is-filtered-out", !hasVisibleCard);
  });
}

function exportJson() {
  saveState();
  const payload = buildExportPayload();
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const fileName = `ba-tier-backup-${formatTimestamp(new Date())}.json`;
  downloadBlob(blob, fileName);
  setStatus("JSONバックアップを書き出しました");
}

async function importJson(event) {
  const file = event.target.files?.[0];
  event.target.value = "";

  if (!file) {
    return;
  }

  try {
    const text = await file.text();
    const imported = normalizeImportedState(JSON.parse(text));
    state = imported;
    normalizeTierAssignments();
    saveState();
    render();
    setStatus("JSONバックアップを読み込みました");
  } catch (error) {
    console.error(error);
    setStatus("JSONの読み込みに失敗しました");
  }
}

async function exportPng() {
  const previousSearch = searchInput.value;
  try {
    setStatus("PNGを書き出し中...");
    if (previousSearch) {
      searchInput.value = "";
      applySearchFilter();
    }

    await waitForBoardImages();
    let dataUrl = "";
    if (window.htmlToImage) {
      try {
        dataUrl = await window.htmlToImage.toPng(tierBoard, {
          cacheBust: true,
          pixelRatio: 2,
          backgroundColor: "#151515",
        });
      } catch (primaryError) {
        console.warn("html-to-image export failed; falling back to canvas renderer.", primaryError);
        dataUrl = await renderBoardToCanvasPng();
      }
    } else {
      dataUrl = await renderBoardToCanvasPng();
    }

    downloadDataUrl(dataUrl, `ba-tier-${formatTimestamp(new Date())}.png`);
    setStatus("PNGを書き出しました");
  } catch (error) {
    console.error(error);
    setStatus("PNG書き出しに失敗しました。画像側のCORS制限の可能性があります");
  } finally {
    if (previousSearch) {
      searchInput.value = previousSearch;
      applySearchFilter();
    }
  }
}

async function renderBoardToCanvasPng() {
  const scale = 2;
  const boardWidth = Math.max(900, Math.round(tierBoard.getBoundingClientRect().width || 1180));
  const labelWidth = Math.round(
    document.querySelector(".tier-label-cell")?.getBoundingClientRect().width || 128,
  );
  const gap = 8;
  const pad = 10;
  const cardWidth = 84;
  const cardHeight = 108;
  const imageHeight = 72;
  const nameHeight = 28;
  const groupPad = 0;
  const groupGap = gap;
  const groupCardHeight = cardHeight;
  const groupImageHeight = imageHeight;
  const groupNameHeight = nameHeight;
  const rowGap = 2;
  const itemsWidth = boardWidth - labelWidth - rowGap;
  const cardsPerRow = Math.max(1, Math.floor((itemsWidth - pad * 2 + gap) / (cardWidth + gap)));
  const rows = state.tiers.map((tier) => {
    const plan = createCanvasTierLayoutPlan(tier, {
      xStart: labelWidth + rowGap + pad,
      yStart: pad,
      itemsWidth,
      cardsPerRow,
      cardWidth,
      cardHeight,
      imageHeight,
      nameHeight,
      groupPad,
      groupGap,
      groupCardHeight,
      groupImageHeight,
      groupNameHeight,
      gap,
    });
    return {
      tier,
      plan,
      height: Math.max(112, pad * 2 + plan.usedHeight),
    };
  });
  const boardHeight = rows.reduce((total, row) => total + row.height, 0) + rowGap * (rows.length - 1);

  const canvas = document.createElement("canvas");
  canvas.width = boardWidth * scale;
  canvas.height = boardHeight * scale;
  const ctx = canvas.getContext("2d");
  ctx.scale(scale, scale);
  ctx.fillStyle = "#090909";
  ctx.fillRect(0, 0, boardWidth, boardHeight);

  const imageCache = new Map();
  let y = 0;
  for (let rowIndex = 0; rowIndex < rows.length; rowIndex += 1) {
    const { tier, height } = rows[rowIndex];
    drawTierRowBackground(ctx, tier, rowIndex, labelWidth, boardWidth, height, y, rowGap);
    drawTierLabel(ctx, tier.label, labelWidth, height, y);
    await drawTierCards(ctx, rows[rowIndex].plan, {
      imageCache,
      xStart: labelWidth + rowGap + pad,
      yStart: y + pad,
      itemsWidth,
      cardsPerRow,
      cardWidth,
      cardHeight,
      imageHeight,
      nameHeight,
      groupPad,
      groupGap,
      groupCardHeight,
      groupImageHeight,
      groupNameHeight,
      gap,
    });
    y += height + rowGap;
  }

  return canvas.toDataURL("image/png");
}

function createCanvasTierLayoutPlan(tier, layout) {
  const placements = [];
  let cursorY = layout.yStart;
  let maxBottom = layout.yStart;
  let column = 0;

  getTierRenderGroups(tier).forEach((group) => {
    if (group.characters.length > 1) {
      const groupSpan = Math.min(group.characters.length, layout.cardsPerRow);
      if (column + groupSpan > layout.cardsPerRow) {
        cursorY = maxBottom + layout.gap;
        column = 0;
      }

      const boxPad = layout.groupPad;
      const boxWidth = groupSpan * layout.cardWidth + Math.max(0, groupSpan - 1) * layout.gap;
      const groupCardsPerRow = groupSpan;
      const cardRows = Math.ceil(group.characters.length / groupCardsPerRow);
      const innerCardWidth =
        (boxWidth - boxPad * 2 - Math.max(0, groupCardsPerRow - 1) * layout.groupGap) / groupCardsPerRow;
      const boxHeight =
        cardRows * layout.cardHeight +
        Math.max(0, cardRows - 1) * layout.groupGap +
        boxPad * 2;
      const boxX = layout.xStart + column * (layout.cardWidth + layout.gap);
      const badgeWidth = Math.min(boxWidth - 8, Math.max(54, group.label.length * 8 + 30));

      placements.push({
        type: "groupBox",
        x: boxX,
        y: cursorY,
        width: boxWidth,
        height: boxHeight,
      });
      placements.push({
        type: "group",
        label: group.label,
        count: group.characters.length,
        x: boxX + 4,
        y: cursorY + 4,
        width: badgeWidth,
        height: GROUP_LABEL_HEIGHT,
      });

      group.characters.forEach((character, index) => {
        const groupColumn = index % groupCardsPerRow;
        const groupRow = Math.floor(index / groupCardsPerRow);
        placements.push({
          type: "character",
          character,
          x: boxX + boxPad + groupColumn * (innerCardWidth + layout.groupGap),
          y: cursorY + boxPad + groupRow * (layout.cardHeight + layout.groupGap),
          cardWidth: innerCardWidth,
          cardHeight: layout.groupCardHeight,
          imageHeight: layout.groupImageHeight,
          nameHeight: layout.groupNameHeight,
        });
      });

      maxBottom = Math.max(maxBottom, cursorY + boxHeight);
      column += groupSpan;
      return;
    }

    if (column >= layout.cardsPerRow) {
      cursorY = maxBottom + layout.gap;
      column = 0;
    }

    placements.push({
      type: "character",
      character: group.characters[0],
      x: layout.xStart + column * (layout.cardWidth + layout.gap),
      y: cursorY,
    });
    maxBottom = Math.max(maxBottom, cursorY + layout.cardHeight);
    column += 1;
  });

  return {
    placements,
    yStart: layout.yStart,
    usedHeight: Math.max(0, maxBottom - layout.yStart),
  };
}

function drawTierRowBackground(ctx, tier, rowIndex, labelWidth, boardWidth, height, y, rowGap) {
  ctx.fillStyle = tier.color;
  ctx.fillRect(0, y, labelWidth, height);
  ctx.fillStyle = rowIndex % 2 ? "#1d1d1d" : "#242424";
  ctx.fillRect(labelWidth + rowGap, y, boardWidth - labelWidth - rowGap, height);
}

function drawTierLabel(ctx, label, labelWidth, rowHeight, y) {
  ctx.save();
  ctx.fillStyle = "#111111";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = "800 30px Segoe UI, Meiryo, sans-serif";
  wrapCanvasText(ctx, label, labelWidth / 2, y + rowHeight / 2, labelWidth - 20, 34);
  ctx.restore();
}

async function drawTierCards(ctx, plan, layout) {
  const yOffset = layout.yStart - plan.yStart;

  for (const placement of plan.placements) {
    if (placement.type === "groupBox") {
      drawCharacterGroupBox(ctx, { ...placement, y: placement.y + yOffset });
      continue;
    }

    if (placement.type === "group") {
      drawCharacterGroupLabel(ctx, { ...placement, y: placement.y + yOffset });
      continue;
    }

    await drawCharacterCard(ctx, placement.character, placement.x, placement.y + yOffset, {
      ...layout,
      cardWidth: placement.cardWidth || layout.cardWidth,
      cardHeight: placement.cardHeight || layout.cardHeight,
      imageHeight: placement.imageHeight || layout.imageHeight,
      nameHeight: placement.nameHeight || layout.nameHeight,
      font: placement.font || "12px Segoe UI, Meiryo, sans-serif",
      nameTextOffset: placement.nameTextOffset || 20,
    });
  }
}

function drawCharacterGroupBox(ctx, placement) {
  roundedRect(ctx, placement.x, placement.y, placement.width, placement.height, 7, "rgba(39, 49, 61, 0.42)");
  ctx.save();
  addRoundedRectPath(ctx, placement.x, placement.y, placement.width, placement.height, 7);
  ctx.strokeStyle = "rgba(148, 170, 194, 0.34)";
  ctx.lineWidth = 1;
  ctx.stroke();
  ctx.restore();
}

function drawCharacterGroupLabel(ctx, placement) {
  roundedRect(ctx, placement.x, placement.y, placement.width, placement.height, placement.height / 2, "rgba(21, 28, 36, 0.82)");

  ctx.save();
  ctx.fillStyle = "#dbe6f2";
  ctx.textAlign = "left";
  ctx.textBaseline = "middle";
  ctx.font = "700 11px Segoe UI, Meiryo, sans-serif";
  drawEllipsizedText(ctx, placement.label, placement.x + 7, placement.y + placement.height / 2, placement.width - 31);

  const countSize = placement.height - 4;
  const countX = placement.x + placement.width - countSize - 3;
  roundedRect(ctx, countX, placement.y + 2, countSize, countSize, countSize / 2, "#dbe6f2");
  ctx.textAlign = "right";
  ctx.fillStyle = "#151515";
  ctx.font = "700 10px Segoe UI, Meiryo, sans-serif";
  ctx.fillText(String(placement.count), countX + countSize - 4, placement.y + placement.height / 2);
  ctx.restore();
}

async function drawCharacterCard(ctx, character, x, y, layout) {
  const radius = 6;
  roundedRect(ctx, x, y, layout.cardWidth, layout.cardHeight, radius, "#313131");
  roundedRect(ctx, x + 5, y + 5, layout.cardWidth - 10, layout.imageHeight, 4, "#20252c");

  try {
    const image = await loadCanvasImage(character.imageUrl);
    drawZoomedThumbnail(ctx, image, x + 5, y + 5, layout.cardWidth - 10, layout.imageHeight, 4);
  } catch {
    ctx.fillStyle = "#20252c";
    ctx.fillRect(x + 5, y + 5, layout.cardWidth - 10, layout.imageHeight);
  }

  ctx.fillStyle = "#f2f2f2";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = layout.font || "12px Segoe UI, Meiryo, sans-serif";
  drawEllipsizedText(
    ctx,
    character.title,
    x + layout.cardWidth / 2,
    y + layout.imageHeight + (layout.nameTextOffset || 20),
    layout.cardWidth - 10,
  );
}

function loadCanvasImage(url) {
  if (!loadCanvasImage.cache) {
    loadCanvasImage.cache = new Map();
  }
  if (loadCanvasImage.cache.has(url)) {
    return loadCanvasImage.cache.get(url);
  }

  const promise = new Promise((resolve, reject) => {
    const image = new Image();
    const timeout = window.setTimeout(() => reject(new Error("Image load timeout")), 12000);
    image.crossOrigin = "anonymous";
    image.referrerPolicy = "no-referrer";
    image.onload = () => {
      window.clearTimeout(timeout);
      resolve(image);
    };
    image.onerror = () => {
      window.clearTimeout(timeout);
      reject(new Error("Image load failed"));
    };
    image.src = url;
  });

  loadCanvasImage.cache.set(url, promise);
  return promise;
}

function drawZoomedThumbnail(ctx, image, x, y, width, height, radius) {
  const ratio = Math.max(width / image.naturalWidth, height / image.naturalHeight) * THUMBNAIL_ZOOM;
  const drawWidth = image.naturalWidth * ratio;
  const drawHeight = image.naturalHeight * ratio;
  const drawX = x + (width - drawWidth) / 2;
  const drawY = y + (height - drawHeight) * THUMBNAIL_FOCUS_Y;

  ctx.save();
  addRoundedRectPath(ctx, x, y, width, height, radius);
  ctx.clip();
  ctx.drawImage(image, drawX, drawY, drawWidth, drawHeight);
  ctx.restore();
}

function roundedRect(ctx, x, y, width, height, radius, fillStyle) {
  ctx.save();
  addRoundedRectPath(ctx, x, y, width, height, radius);
  ctx.fillStyle = fillStyle;
  ctx.fill();
  ctx.restore();
}

function addRoundedRectPath(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + width, y, x + width, y + height, radius);
  ctx.arcTo(x + width, y + height, x, y + height, radius);
  ctx.arcTo(x, y + height, x, y, radius);
  ctx.arcTo(x, y, x + width, y, radius);
  ctx.closePath();
}

function wrapCanvasText(ctx, text, x, centerY, maxWidth, lineHeight) {
  const words = String(text).split(/(\s+)/).filter((part) => part.trim());
  const lines = [];
  let current = "";

  words.forEach((word) => {
    const next = current ? `${current} ${word}` : word;
    if (ctx.measureText(next).width <= maxWidth || !current) {
      current = next;
    } else {
      lines.push(current);
      current = word;
    }
  });

  if (current) {
    lines.push(current);
  }

  const visibleLines = lines.length ? lines.slice(0, 3) : [""];
  const startY = centerY - ((visibleLines.length - 1) * lineHeight) / 2;
  visibleLines.forEach((line, index) => {
    drawEllipsizedText(ctx, line, x, startY + index * lineHeight, maxWidth);
  });
}

function drawEllipsizedText(ctx, text, x, y, maxWidth) {
  const ellipsis = "...";
  let output = String(text);
  if (ctx.measureText(output).width <= maxWidth) {
    ctx.fillText(output, x, y);
    return;
  }

  while (output.length > 0 && ctx.measureText(`${output}${ellipsis}`).width > maxWidth) {
    output = output.slice(0, -1);
  }

  ctx.fillText(output ? `${output}${ellipsis}` : ellipsis, x, y);
}

function resetLayout() {
  if (!window.confirm("配置とラベルを初期状態に戻します。よろしいですか？")) {
    return;
  }

  const characters = sortCharactersByTitle(state.characters);
  state = createEmptyState();
  state.characters = characters;
  getUnclassifiedTier().itemIds = characters.map((character) => character.id);
  saveState();
  render();
  setStatus("初期状態に戻しました");
}

function createEmptyState() {
  return {
    version: EXPORT_VERSION,
    savedAt: new Date().toISOString(),
    tiers: cloneDefaultTiers(),
    characters: [],
  };
}

function cloneDefaultTiers() {
  return DEFAULT_TIERS.map((tier) => ({ ...tier, itemIds: [] }));
}

function loadSavedState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return null;
    }

    return normalizeImportedState(JSON.parse(raw));
  } catch (error) {
    console.error(error);
    return null;
  }
}

function saveState() {
  state.savedAt = new Date().toISOString();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(buildExportPayload()));
}

function buildExportPayload() {
  return {
    version: EXPORT_VERSION,
    savedAt: state.savedAt || new Date().toISOString(),
    tiers: state.tiers.map((tier) => ({
      id: tier.id,
      label: tier.label,
      color: tier.color,
      itemIds: [...tier.itemIds],
    })),
    characters: state.characters.map((character) => ({
      id: character.id,
      title: character.title,
      imageUrl: character.imageUrl,
      sourceUrl: character.sourceUrl,
    })),
  };
}

function normalizeImportedState(payload) {
  if (!payload || !Array.isArray(payload.tiers) || !Array.isArray(payload.characters)) {
    throw new Error("Invalid backup format");
  }

  const tierDefaultsById = new Map(DEFAULT_TIERS.map((tier) => [tier.id, tier]));
  const importedTierIds = new Set();
  const tiers = payload.tiers
    .filter((tier) => tier?.id)
    .map((tier) => {
      importedTierIds.add(tier.id);
      const fallback = tierDefaultsById.get(tier.id);
      return {
        id: String(tier.id),
        label: String(tier.label || fallback?.label || tier.id),
        color: normalizePaletteColor(tier.color, fallback?.color || DEFAULT_NEW_TIER_COLOR),
        itemIds: Array.isArray(tier.itemIds) ? tier.itemIds.map(String) : [],
      };
    });

  DEFAULT_TIERS.forEach((tier) => {
    if (!importedTierIds.has(tier.id)) {
      tiers.push({ ...tier, itemIds: [] });
    }
  });

  const characters = payload.characters
    .filter((character) => character?.id && character?.title && character?.imageUrl)
    .map((character) => ({
      id: String(character.id),
      title: String(character.title),
      imageUrl: String(character.imageUrl),
      sourceUrl: String(character.sourceUrl || ""),
    }))
    .filter((character) => !isExcludedCharacter(character));

  const normalized = {
    version: EXPORT_VERSION,
    savedAt: payload.savedAt || new Date().toISOString(),
    tiers,
    characters,
  };

  state = normalized;
  normalizeTierAssignments();
  return normalized;
}

function normalizeTierAssignments({ preserveOrder = false } = {}) {
  const characterIds = new Set(state.characters.map((character) => character.id));
  const assigned = new Set();

  state.tiers.forEach((tier) => {
    const uniqueIds = [];
    tier.itemIds.forEach((id) => {
      if (characterIds.has(id) && !assigned.has(id)) {
        uniqueIds.push(id);
        assigned.add(id);
      }
    });
    tier.itemIds = uniqueIds;
  });

  const unassigned = state.characters
    .map((character) => character.id)
    .filter((id) => !assigned.has(id));

  const unclassifiedTier = getUnclassifiedTier();
  unclassifiedTier.itemIds.push(...unassigned);

  if (!preserveOrder) {
    sortTierItemIdsByTitle(unclassifiedTier);
  }
}

function getUnclassifiedTier() {
  let tier = state.tiers.find((entry) => entry.id === "tier-unclassified");
  if (!tier) {
    tier = { ...DEFAULT_TIERS.at(-1), itemIds: [] };
    state.tiers.push(tier);
  }
  return tier;
}

function updateCharacterCount() {
  characterCount.textContent = `${state.characters.length}件`;
}

function sortCharactersByTitle(characters) {
  return [...characters].sort(compareCharactersByGroup);
}

function sortUnclassifiedTier() {
  sortTierItemIdsByTitle(getUnclassifiedTier());
}

function sortTierItemIdsByTitle(tier) {
  const characterById = new Map(state.characters.map((character) => [character.id, character]));
  tier.itemIds.sort((left, right) => {
    const leftCharacter = characterById.get(left);
    const rightCharacter = characterById.get(right);
    if (leftCharacter && rightCharacter) {
      return compareCharactersByGroup(leftCharacter, rightCharacter);
    }
    return compareTitles(leftCharacter?.title || left, rightCharacter?.title || right);
  });
}

function compareCharactersByGroup(left, right) {
  const groupComparison = compareTitles(getCharacterGroupName(left.title), getCharacterGroupName(right.title));
  return groupComparison || compareTitles(left.title, right.title);
}

function getCharacterGroupName(title) {
  return cleanTitle(String(title || "").replace(/\s*\([^)]*\)\s*$/u, ""));
}

function compareTitles(left, right) {
  return String(left || "").localeCompare(String(right || ""), "en", { sensitivity: "base" });
}

function setStatus(message) {
  loadStatus.textContent = message;
}

function cleanTitle(title) {
  return String(title || "")
    .replace(/\s+/g, " ")
    .trim();
}

function createCharacterId(title) {
  const slug = slugify(title);
  return `char-${slug || hashString(title)}`;
}

function createUniqueCharacterId(title) {
  const slug = slugify(title);
  const base = `custom-${slug || hashString(title)}`;
  return createUniqueId(base, new Set(state.characters.map((character) => character.id)));
}

function createUniqueTierId(label) {
  const slug = slugify(label);
  const base = `tier-custom-${slug || hashString(label)}`;
  return createUniqueId(base, new Set(state.tiers.map((tier) => tier.id)));
}

function createUniqueId(base, existingIds) {
  if (!existingIds.has(base)) {
    return base;
  }

  let index = 2;
  while (existingIds.has(`${base}-${index}`)) {
    index += 1;
  }
  return `${base}-${index}`;
}

function slugify(value) {
  return String(value || "")
    .normalize("NFKD")
    .toLowerCase()
    .replace(/['".()]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function normalizeUrl(url, base = WIKI_BASE_URL) {
  if (!url) {
    return "";
  }

  if (url.startsWith("//")) {
    return `https:${url}`;
  }

  try {
    return new URL(url, base).toString();
  } catch {
    return "";
  }
}

function isRemoteUrl(url) {
  return /^https?:\/\//i.test(String(url || ""));
}

function isHexColor(value) {
  return /^#[0-9a-f]{6}$/i.test(String(value || ""));
}

function normalizePaletteColor(color, fallback = DEFAULT_NEW_TIER_COLOR) {
  const normalized = String(color || "").trim().toLowerCase();
  const normalizedFallback = String(fallback || "").trim().toLowerCase();
  const fallbackColor = TIER_COLOR_PALETTE.includes(normalizedFallback) ? normalizedFallback : DEFAULT_NEW_TIER_COLOR;

  if (!isHexColor(normalized)) {
    return fallbackColor;
  }

  if (TIER_COLOR_PALETTE.includes(normalized)) {
    return normalized;
  }

  return findNearestPaletteColor(normalized) || fallbackColor;
}

function findNearestPaletteColor(color) {
  const target = hexToRgb(color);
  if (!target) {
    return "";
  }

  return TIER_COLOR_PALETTE.map((paletteColor) => ({
    color: paletteColor,
    distance: getColorDistance(target, hexToRgb(paletteColor)),
  })).sort((left, right) => left.distance - right.distance)[0]?.color || "";
}

function hexToRgb(color) {
  const match = /^#([0-9a-f]{6})$/i.exec(String(color || ""));
  if (!match) {
    return null;
  }

  const value = Number.parseInt(match[1], 16);
  return {
    r: (value >> 16) & 255,
    g: (value >> 8) & 255,
    b: value & 255,
  };
}

function getColorDistance(left, right) {
  if (!left || !right) {
    return Number.POSITIVE_INFINITY;
  }

  return (left.r - right.r) ** 2 + (left.g - right.g) ** 2 + (left.b - right.b) ** 2;
}

function hashString(value) {
  let hash = 0;
  for (let index = 0; index < value.length; index += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(index);
    hash |= 0;
  }
  return Math.abs(hash).toString(36);
}

function formatTimestamp(date) {
  const pad = (value) => String(value).padStart(2, "0");
  return [
    date.getFullYear(),
    pad(date.getMonth() + 1),
    pad(date.getDate()),
    "-",
    pad(date.getHours()),
    pad(date.getMinutes()),
    pad(date.getSeconds()),
  ].join("");
}

function downloadBlob(blob, fileName) {
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = fileName;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
}

function downloadDataUrl(dataUrl, fileName) {
  const anchor = document.createElement("a");
  anchor.href = dataUrl;
  anchor.download = fileName;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
}

function waitForBoardImages() {
  const images = Array.from(tierBoard.querySelectorAll("img"));
  return Promise.all(
    images.map((image) => {
      image.loading = "eager";
      if (image.complete) {
        return Promise.resolve();
      }

      return new Promise((resolve) => {
        const finish = () => {
          window.clearTimeout(timeout);
          resolve();
        };
        const timeout = window.setTimeout(resolve, 12000);
        image.addEventListener("load", finish, { once: true });
        image.addEventListener("error", finish, { once: true });
      });
    }),
  );
}

