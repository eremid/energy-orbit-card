# Changelog

## [2.0.0](https://github.com/eremid/energy-orbit-card/compare/v1.0.0...v2.0.0) (2026-03-01)


### ⚠ BREAKING CHANGES

* initial_battery_mode and initial_solar_mode removed in favor of local persistence.
* Gauge start positions moved from 6 o'clock to 12 o'clock for grid and battery power.

### Features

* add HACS validation action ([94b67a4](https://github.com/eremid/energy-orbit-card/commit/94b67a4002f65346e84d1af083821d11c40a5695))
* add ring labels and refactor bidirectional gauge logic ([1670975](https://github.com/eremid/energy-orbit-card/commit/1670975f692d43ed039772a8e6bf32e75d120a15))
* add support for dynamic battery power max entity ([39cf5b6](https://github.com/eremid/energy-orbit-card/commit/39cf5b64b1c3c41baccbeba4596fed42105338b1))
* refactor UI and add local persistence ([efa4702](https://github.com/eremid/energy-orbit-card/commit/efa470269aca2de371126291b9334f972550ed82))
* replace preview image and update README ([65945c6](https://github.com/eremid/energy-orbit-card/commit/65945c6abdf8c6c47dff9c1f4388935c4a6b570a))
* simplify bidirectional_mode configuration options ([dd35a64](https://github.com/eremid/energy-orbit-card/commit/dd35a649ffab1e0f27f64a0e39c10edf387ac967))
* unified 12 o'clock gauges and dynamic ring labels ([feccb7a](https://github.com/eremid/energy-orbit-card/commit/feccb7a19d6d1860149aaa9b504677256ecb76c9))
* use battery operation state for orbit label ([f034354](https://github.com/eremid/energy-orbit-card/commit/f034354f8f2098b2d686f2bd462c227d029642c3))


### Bug Fixes

* center battery value with icon and align subtext to bottom-right ([8f2d366](https://github.com/eremid/energy-orbit-card/commit/8f2d366b04ec0b16a29be1c9057ec47cdbde20a5))
* mask stat-item borders behind gauges ([6d39c68](https://github.com/eremid/energy-orbit-card/commit/6d39c687156edcdb39c3ef02c788e86fd62571d8))
* prevent stored XSS via config colors and entity names ([e59350b](https://github.com/eremid/energy-orbit-card/commit/e59350b563e5bed3ea6ea30fa046a65728987e10))
* remove invalid 'render' key from hacs.json ([6cf439a](https://github.com/eremid/energy-orbit-card/commit/6cf439a29106af34fc059ddb754e21bbed1ffe3e))
* update version to 1.0.1 and remove unused config methods ([424f4ea](https://github.com/eremid/energy-orbit-card/commit/424f4eacf7f97afacabf8fd1c3a3722bcd365130))


### Performance Improvements

* optimize MDI path lookup in _getMdiPath ([d4ba618](https://github.com/eremid/energy-orbit-card/commit/d4ba618ddc87de42b8e520071b22c16f4d581af8))

## 1.0.0 (2026-02-23)


### Features

* initial release of Energy Orbit Card ([802c13d](https://github.com/eremid/energy-orbit-card/commit/802c13de0e0cdbd18faa8318e90a78e1d12601b8))
