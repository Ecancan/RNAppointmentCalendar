//
//  RNAppointmentCalendarModule.swift
//  RNAppointmentCalendarModule
//
//  Copyright © 2022 Ahmet CAN. All rights reserved.
//

import Foundation

@objc(RNAppointmentCalendarModule)
class RNAppointmentCalendarModule: NSObject {
  @objc
  func constantsToExport() -> [AnyHashable : Any]! {
    return ["count": 1]
  }

  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
