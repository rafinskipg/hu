(ns hu.test.maths
  (:require
    [assert :refer [equal deep-equal]]
    [hu.lib.maths :as _]
    [hu.lib.equality :as equ]))

(suite :cross
  (fn []
    (test :basic
      (fn []
        (.array-equal? equ (.cross _ [3 4 5] [9 -3 0]) [15 45 -45])
        (.array-equal? equ (.cross _ [22 3 4] [-2 3 4]) [0 -96 72])
        (.array-equal? equ (.cross _ [2 3 4] [2 3 4]) [0 0 0])))))