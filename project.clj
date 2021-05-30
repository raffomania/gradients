(defproject gradients "0.1.0-SNAPSHOT"
  :description "wallpaper generator"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.10.3"]
                 [org.clojure/clojurescript "1.10.866"]
                 [reagent "1.0.0"]
                 [org.clojure/math.combinatorics "0.1.6"]
                 [binaryage/devtools "1.0.3"]
                 [cljsjs/pixi "6.0.2-0"]
                 [thi.ng/math "0.3.0"]
                 [thi.ng/color "1.4.0"]
                 [binaryage/oops "0.7.1"]
                 [com.bhauman/figwheel-main "0.2.13"]
                 [com.bhauman/rebel-readline-cljs "0.1.4"]
                 [org.clojure/core.async "1.3.618"]]

  :plugins [[lein-cljsbuild "1.1.7"]]

  :aliases {"fig" ["trampoline" "run" "-m" "figwheel.main"]}

  :hooks [leiningen.cljsbuild]

  :clean-targets ^{:protect false} ["resources/public/js" :target-path]

  :cljsbuild
  {:builds {
            :development
            {:source-paths ["src"]
             :figwheel true
             :compiler
             {:main "gradients.core"
              :preloads [devtools.preload]
              :output-to "resources/public/js/main.js"
              :output-dir "resources/public/js/development"
              :asset-path "js/development"
              :source-map true
              :optimizations :none
              :external-config
              {:devtools/config
                {:features-to-install [:formatters :hints]}}}}
            :optimized
            {:source-paths ["src"]
             :compiler
             {
              :output-to "resources/public/js/main.js"
              :output-dir "resources/public/js/optimized"
              :asset-path "js/optimized"
              :optimizations :advanced
              :pretty-print false
              :closure-defines {"goog.DEBUG" false}}}}})
