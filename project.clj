(defproject gradients "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.9.0"]
                 [quil "2.6.0"]
                 [org.clojure/clojurescript "1.9.946"]
                 [reagent "0.8.0-alpha2"]
                 [org.clojure/math.combinatorics "0.1.4"]
                 [binaryage/devtools "0.9.9"]
                 [org.clojure/core.async "0.4.474"]]

  :plugins [[lein-cljsbuild "1.1.7"]
            [lein-figwheel "0.5.14"]
            [lein-kibit "0.1.5"]]

  :hooks [leiningen.cljsbuild]

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
                {:features-to-install [:formatters :hints :async]}}}}
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
