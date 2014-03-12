(ns hu.lib.string
  (:require
    [hu.lib.common :refer [string? array?]]))

(def ^:private EOL #"[\n|\r]")

(defmacro str
  [x call]
  `(if (string? x) ~call x))

(defmacro arr
  [x call]
  `(if (array? x) ~call x))

(defn ^string lines
  [x] (str x (.split x EOL)))

(defn ^string unlines
  [x] (arr x (.join x "\n")))

(defn ^string words
  [x] (str x (.split x #"[ ]+")))

(defn ^string unwords
  [x] (arr x (.join x " ")))

(defn ^string chars
  [x] (str x (.split x "")))

(defn ^string unchars
  [x] (arr x (.join x "")))

(defn ^string subs
 [x start end]
 (str x (.substring x start end)))

(defn ^string reverse
  [x]
  (str x
    (.join
      (.reverse
        (.split x "")) "")))

(defn ^string repeat
  [n x]
  (str x
    (if (> n 0)
      (+ x (repeat (- n 1) x)) "")))
